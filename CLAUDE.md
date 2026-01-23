# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Recipe Collector is a recipe management web application built with vanilla HTML, CSS, and JavaScript. It allows users to collect recipes from URLs, view them in a distraction-free full-screen layout, and adjust serving sizes with automatic ingredient scaling.

## Architecture and Structure

This is a single-page application with all code contained in these files:
- `index.html` - Main HTML structure and JavaScript application
- `recipes.js` - Template for initial recipes (currently empty)
- `worker-recipe-scraper.js` - Cloudflare Worker for scraping recipes from URLs

### Key Features

**Recipe Collection:**
- Import recipes from URLs (uses Cloudflare Worker to scrape recipe data)
- Manual recipe addition via form
- Local storage persistence for all recipes
- Filter by cuisine type
- Export/Import recipes as JSON

**Full-Screen Recipe View:**
- Distraction-free recipe detail view
- Small thumbnail image (not prominent)
- Large, readable text for ingredients and instructions
- Keyboard navigation (Escape to close)

**Serving Size Adjustment:**
- Customizable serving sizes with +/- controls
- Automatic ingredient scaling based on serving ratio
- Handles fractions (½, ¼, ⅓, etc.), decimals, and ranges
- Smart formatting of scaled quantities

**Technology Stack:**
- Vanilla JavaScript (ES6+)
- TailwindCSS via CDN for styling
- LocalStorage for data persistence
- Cloudflare Worker for recipe scraping
- No build process or package manager

## Development Workflow

Since this is a static web application with no build process:

1. **Local Development:** Open `index.html` directly in a browser
2. **No Build Commands:** The application runs directly without compilation
3. **No Package Manager:** All dependencies loaded via CDN
4. **No Test Framework:** Manual testing by opening in browser

## Code Organization

**Recipe Data Structure:**
```javascript
{
    id: number,
    name: string,
    cuisine: string,
    description: string,
    prepTime: number,
    cookTime: number,
    servings: string,        // e.g., "4", "4 servings"
    ingredients: string[],
    instructions: string,
    imageUrl: string,
    imported: boolean,       // true if imported from URL
    sourceUrl: string        // original recipe URL
}
```

**Local Storage Keys:**
- `mealPlannerUserRecipes` - All user recipes (imported and manual)

**Key Functions:**
- `renderRecipes()` - Displays filtered recipe grid
- `showRecipeModal()` - Opens full-screen recipe view
- `scaleIngredient()` - Scales ingredient quantities based on serving ratio
- `parseServings()` - Extracts numeric serving count from string
- `formatQuantity()` - Formats scaled numbers with fractions

**Ingredient Scaling:**
- Parses quantities including fractions (1/2, ½), decimals, and ranges (2-3)
- Scales proportionally based on original/new serving ratio
- Formats output with unicode fractions for readability

## Recipe Scraper Worker

The Cloudflare Worker (`worker-recipe-scraper.js`) extracts recipe data from URLs:
- Deployed at: `recipe-scraper.bhetariah.workers.dev`
- Extracts JSON-LD structured data (primary method)
- Falls back to microdata parsing
- Returns normalized recipe object

## Important Notes

- No server-side functionality - purely client-side (except scraper worker)
- User recipes persist in localStorage only
- No authentication or user management system
- Meal planning features are hidden but code is retained
