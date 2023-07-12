export const selectFavRecipes = state => state.favorite.items;
export const selectFavRecipesCount = state => state.favorite.totalCount;
export const selectFavIsLoading = state => state.favorite.isLoading;
export const selectFavError = state => state.favorite.error;
