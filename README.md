## Project Overview

VeggiPlan is a vegetarian meal planning web application built with vanilla HTML, CSS, and JavaScript. It allows users to plan weekly meals by browsing recipes from multiple cuisines and organizing them into a weekly planner using drag-and-drop functionality.

## Architecture and Structure

This is a single-page application with all code contained in three main files:
- `index.html` - Main HTML structure and JavaScript application
- `recipes.js` - Recipe database with 74 mushroom-free vegetarian recipes loaded via script tag
- `README.md` - Basic project description

### Key Components

**Recipe Management:**
- Initial recipe database loaded from `recipes.js` as `window.initialRecipes`
- Dynamic recipe addition via modal form
- Local storage persistence for user-added recipes
- Filter system by cuisine type (Indian, Italian, Mexican, Mediterranean, Thai, etc.)

**Weekly Planner:**
- Drag-and-drop interface for meal planning
- 7-day grid with Lunch/Dinner slots
- Local storage persistence for meal plans
- Random plan generation feature

**Shopping List:**
- Automatic shopping list generation from weekly meal plan
- Ingredient grouping and deduplication
- Checkable items with progress tracking
- Local storage persistence for shopping list state

**Technology Stack:**
- Vanilla JavaScript (ES6+)
- TailwindCSS via CDN for styling
- HTML5 drag-and-drop API
- LocalStorage for data persistence
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
    ingredients: string[],
    instructions: string,
    imageUrl: string
}
```

**Local Storage Keys:**
- `mealPlannerUserRecipes` - User-added recipes (ID > 1000)
- `mealPlannerPlan` - Weekly meal plan assignments
- `mealPlannerShoppingList` - Shopping list items with checked state

**Key Functions:**
- `renderRecipes()` - Displays filtered recipe list
- `renderPlanner()` - Updates weekly planner grid
- `generateShoppingList()` - Creates shopping list from weekly plan
- `renderShoppingList()` - Updates shopping list display
- Drag-and-drop event handlers for meal assignment
- Modal management for recipe viewing/adding

## Important Notes

- All recipes have placeholder images from placehold.co
- No server-side functionality - purely client-side
- Recipe database is centralized in `recipes.js` and loaded as `window.initialRecipes`
- User-added recipes persist in localStorage only
- No authentication or user management system
