export const selectFavRecipes = state => state.favorite.items;
export const selectFavRecipesTotal = state => state.favorite.total;
export const selectFavIsLoading = state => state.favorite.isLoading;
export const selectFavError = state => state.favorite.error;
export const selectFavStatus = state => state.favorite.status;
export const selectFavPage = state => state.favorite.page;
export const selectFavPages = state => state.favorite.pages;
export const selectFavLimit = state => state.favorite.limit;

export const selectIsFavorite = (state, recipeId) => {
  if (
    state.favorite.items.indexOf(
      ({ _id }) => _id.$oid.toString() === recipeId.$oid.toString()
    ) >= 0
  )
    return true;
  else return false;
};
