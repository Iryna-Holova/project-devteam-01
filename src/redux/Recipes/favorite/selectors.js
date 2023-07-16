export const selectFavRecipes = state => state.recipes.favorites.items;
export const selectFavRecipesTotal = state => state.recipes.favorites.total;
export const selectFavIsLoading = state => state.recipes.favorites.isLoading;
export const selectFavError = state => state.recipes.favorites.error;
export const selectFavStatus = state => state.recipes.favorites.status;
export const selectFavPage = state => state.recipes.favorites.page;
export const selectFavPages = state => state.recipes.favorites.pages;
export const selectFavLimit = state => state.recipes.favorites.limit;

export const selectIsFavorite = (state, recipeId) => {
  if (state.recipes.favorites.items.length === 0) return false;
  if (
    state.recipes.favorites.items.indexOf(
      ({ _id }) => _id.$oid.toString() === recipeId.$oid.toString()
    ) >= 0
  )
    return true;
  else return false;
};
