export const selectSearchByNameResult = state =>
  state.recipes.searchByName.items;
export const selectSearchByNameQuery = state =>
  state.recipes.searchByName.Query;
export const selectSearchByNameError = state =>
  state.recipes.searchByName.error;
