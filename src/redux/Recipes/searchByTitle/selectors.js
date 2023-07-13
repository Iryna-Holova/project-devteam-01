export const selectSearchByTitleResult = state =>
  state.recipes.searchByTitle.items;
export const selectSearchByTitleQuery = state =>
  state.recipes.searchByTitle.query;
export const selectSearchByTitleError = state =>
  state.recipes.searchByTitle.error;
export const selectSearchByTitlePage = state =>
  state.recipes.searchByTitle.page;
export const selectSearchByTitleTotal = state =>
  state.recipes.searchByTitle.total;
export const selectSearchByTitlePages = state =>
  state.recipes.searchByTitle.pages;
export const selectSearchByTitleLimit = state =>
  state.recipes.searchByTitle.limit;
export const selectSearchByTitleLoading = state =>
  state.recipes.searchByTitle.isLoading;
