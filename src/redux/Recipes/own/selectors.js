export const selectOwnRecipesResult = state => state.recipes.ownRecipes.items;
export const selectOwnRecipesQuery = state => state.recipes.ownRecipes.query;
export const selectOwnRecipesError = state => state.recipes.ownRecipes.error;
export const selectOwnRecipesPage = state => state.recipes.ownRecipes.page;
export const selectOwnRecipesTotal = state => state.recipes.ownRecipes.total;
export const selectOwnRecipesPages = state => state.recipes.ownRecipes.pages;
export const selectOwnRecipesLimit = state => state.recipes.ownRecipes.limit;
export const selectOwnRecipesLoading = state =>
  state.recipes.ownRecipes.isLoading;
export const selectOwnRecipesStatus = state => state.recipes.ownRecipes.status;
