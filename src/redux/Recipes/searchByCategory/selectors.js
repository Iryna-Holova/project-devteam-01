 export const selectSearchByCategoryResult = state =>
   state.recipes.searchByCategory.items;
 export const selectSearchByCategoryQuery = state =>
   state.recipes.searchByCategory.query;
 export const selectSearchByCategoryError = state =>
   state.recipes.searchByCategory.error;
 export const selectSearchByCategoryPage = state =>
   state.recipes.searchByCategory.page;
 export const selectSearchByCategoryTotal = state =>
   state.recipes.searchByCategory.total;
 export const selectSearchByCategoryPages = state =>
   state.recipes.searchByCategory.pages;
 export const selectSearchByCategoryLimit = state =>
   state.recipes.searchByCategory.limit;
 export const selectSearchByCategoryLoading = state =>
   state.recipes.searchByCategory.isLoading;
