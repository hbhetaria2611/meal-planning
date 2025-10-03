/**
 * Cloudflare Worker: Recipe URL Scraper
 *
 * This worker fetches recipe URLs and extracts structured recipe data.
 * It looks for JSON-LD schema.org Recipe markup and microdata.
 */

// CORS headers for frontend access
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Only accept POST requests
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    try {
      const { url } = await request.json();

      if (!url) {
        return new Response(JSON.stringify({ error: 'URL is required' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // Fetch the recipe page
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; RecipeScraper/1.0)',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch URL: ${response.status}`);
      }

      const html = await response.text();

      // Extract recipe data
      const recipeData = await extractRecipeData(html, url);

      if (!recipeData) {
        return new Response(
          JSON.stringify({
            error: 'No recipe data found. Make sure the URL contains a valid recipe with structured data.'
          }),
          {
            status: 404,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        );
      }

      return new Response(JSON.stringify(recipeData), {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: error.message || 'Failed to scrape recipe' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }
  },
};

/**
 * Extract recipe data from HTML
 * Supports JSON-LD and microdata formats
 */
async function extractRecipeData(html, sourceUrl) {
  // Try JSON-LD first (most common for modern recipe sites)
  const jsonLdRecipe = extractJsonLd(html);
  if (jsonLdRecipe) return jsonLdRecipe;

  // Fallback to microdata parsing
  const microdataRecipe = extractMicrodata(html);
  if (microdataRecipe) return microdataRecipe;

  return null;
}

/**
 * Extract recipe from JSON-LD script tags
 */
function extractJsonLd(html) {
  const jsonLdRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;

  while ((match = jsonLdRegex.exec(html)) !== null) {
    try {
      const data = JSON.parse(match[1]);

      // Handle both single recipe and array of items
      const recipe = Array.isArray(data)
        ? data.find(item => item['@type'] === 'Recipe')
        : data['@type'] === 'Recipe' ? data : data['@graph']?.find(item => item['@type'] === 'Recipe');

      if (recipe) {
        return normalizeRecipe(recipe);
      }
    } catch (e) {
      continue;
    }
  }

  return null;
}

/**
 * Extract recipe from microdata (fallback)
 */
function extractMicrodata(html) {
  // Basic microdata extraction - looks for common patterns
  const recipeMatch = html.match(/itemtype=["']https?:\/\/schema\.org\/Recipe["']/i);
  if (!recipeMatch) return null;

  // Extract basic fields using microdata properties
  const extractProp = (prop) => {
    const regex = new RegExp(`itemprop=["']${prop}["'][^>]*>([^<]+)`, 'i');
    const match = html.match(regex);
    return match ? match[1].trim() : '';
  };

  const name = extractProp('name');
  const description = extractProp('description');

  if (!name) return null;

  return {
    name,
    description,
    prepTime: extractProp('prepTime'),
    cookTime: extractProp('cookTime'),
    recipeYield: extractProp('recipeYield'),
    recipeIngredient: extractIngredientsMicrodata(html),
    recipeInstructions: extractProp('recipeInstructions'),
    image: extractProp('image'),
  };
}

/**
 * Extract ingredients from microdata
 */
function extractIngredientsMicrodata(html) {
  const ingredients = [];
  const regex = /itemprop=["']recipeIngredient["'][^>]*>([^<]+)/gi;
  let match;

  while ((match = regex.exec(html)) !== null) {
    ingredients.push(match[1].trim());
  }

  return ingredients;
}

/**
 * Normalize recipe data to consistent format
 */
function normalizeRecipe(recipe) {
  return {
    name: recipe.name || 'Untitled Recipe',
    description: recipe.description || '',
    cuisine: recipe.recipeCuisine || 'Other',
    prepTime: parseDuration(recipe.prepTime),
    cookTime: parseDuration(recipe.cookTime),
    totalTime: parseDuration(recipe.totalTime),
    servings: recipe.recipeYield || recipe.servings || '4',
    ingredients: normalizeIngredients(recipe.recipeIngredient || recipe.ingredients),
    instructions: normalizeInstructions(recipe.recipeInstructions),
    imageUrl: normalizeImage(recipe.image),
    sourceUrl: recipe.url,
    author: recipe.author?.name || recipe.author || 'Unknown',
    keywords: recipe.keywords || '',
  };
}

/**
 * Parse ISO 8601 duration to minutes
 */
function parseDuration(duration) {
  if (!duration) return 0;
  if (typeof duration === 'number') return duration;

  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
  if (!match) return 0;

  const hours = parseInt(match[1] || 0);
  const minutes = parseInt(match[2] || 0);
  return hours * 60 + minutes;
}

/**
 * Normalize ingredients to string array
 */
function normalizeIngredients(ingredients) {
  if (!ingredients) return [];
  if (Array.isArray(ingredients)) {
    return ingredients.map(ing =>
      typeof ing === 'string' ? ing : ing.text || ing.name || ''
    ).filter(Boolean);
  }
  if (typeof ingredients === 'string') {
    return ingredients.split('\n').filter(Boolean);
  }
  return [];
}

/**
 * Normalize instructions to single string
 */
function normalizeInstructions(instructions) {
  if (!instructions) return '';

  if (typeof instructions === 'string') return instructions;

  if (Array.isArray(instructions)) {
    return instructions
      .map((step, idx) => {
        if (typeof step === 'string') return step;
        if (step.text) return step.text;
        if (step.name) return step.name;
        return '';
      })
      .filter(Boolean)
      .map((step, idx) => `${idx + 1}. ${step}`)
      .join('\n\n');
  }

  if (instructions.text) return instructions.text;

  return '';
}

/**
 * Normalize image URL
 */
function normalizeImage(image) {
  if (!image) return 'https://placehold.co/400x300/667eea/white?text=No+Image';
  if (typeof image === 'string') return image;
  if (Array.isArray(image)) return image[0];
  if (image.url) return image.url;
  return 'https://placehold.co/400x300/667eea/white?text=No+Image';
}
