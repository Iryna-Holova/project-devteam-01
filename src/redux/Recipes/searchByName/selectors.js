export const selectSearchByNameResult = state =>
  state.recipes.searchByName.items;
export const selectSearchByNameQuery = state =>
  state.recipes.searchByName.query;
export const selectSearchByNameError = state =>
  state.recipes.searchByName.error;
export const selectSearchByNamePage = state => state.recipes.searchByName.page;
export const selectSearchByNameTotal = state =>
  state.recipes.searchByName.total;
export const selectSearchByNamePages = state =>
  state.recipes.searchByName.pages;
export const selectSearchByNameLimit = state =>
  state.recipes.searchByName.limit;
export const selectSearchByNameLoading = state =>
  state.recipes.searchByName.isLoading;
// export const selectSearchByNameQueryParams = state => {
//   return {
//     query: state.recipes.searchByName.query,
//     limit: state.recipes.searchByName.limit,
//     page: state.recipes.searchByName.page,
//   };
// };
