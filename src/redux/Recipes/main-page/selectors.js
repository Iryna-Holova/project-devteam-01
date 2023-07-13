export const selectMainPage = state => state.recipes.mainpage.items;
export const selectMainPageIsLoading = state =>
  state.recipes.mainpage.isLoading;
export const selectMainPageError = state => state.recipes.mainpage.error;
