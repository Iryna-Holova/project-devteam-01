import { combineReducers } from 'redux';
import { favoriteReducer } from './favorite/favoriteRecipesSlice';
//import { mainPageReducer } from './main-page/slice';
import { searchByTitleReducer } from './searchByTitle/slice';
import { searchByCategoryReducer } from './searchByCategory/slice';
import { ownRecipesReducer } from './own/slice';
import { searchByReducer } from './SearchBy/slice';

// Код редюсеров tasksReducer и filtersReducer
export const recipesReducer = combineReducers({
  favorites: favoriteReducer,
  // mainpage: mainPageReducer,
  searchByTitle: searchByTitleReducer,
  searchByCategory: searchByCategoryReducer,
  searchBy: searchByReducer,
  ownRecipes: ownRecipesReducer,
});
