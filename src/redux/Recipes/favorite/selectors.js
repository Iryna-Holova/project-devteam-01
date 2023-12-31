export const selectFavRecipes = state => state.recipes.favorites.items;
export const selectFavRecipesTotal = state => state.recipes.favorites.total;
export const selectFavIsLoading = state => state.recipes.favorites.isLoading;
export const selectFavError = state => state.recipes.favorites.error;
export const selectFavStatus = state => state.recipes.favorites.status;
export const selectFavPage = state => state.recipes.favorites.page;
export const selectFavPages = state => state.recipes.favorites.pages;
export const selectFavLimit = state => state.recipes.favorites.limit;
export const selectisDeleting = state => state.recipes.favorites.isDeleting;

export const selectIsFavorite = (state, recipeId) => {
  if (state.recipes.favorites.items.length === 0) return false;
  const index = state.recipes.favorites.items.findIndex(({ _id }) => {
    return _id === recipeId;
  });
  if (index >= 0) return true;
  else return false;
};
