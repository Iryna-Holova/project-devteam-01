import { combineReducers } from 'redux';
import { favoriteReducer } from './favorite/favoriteRecipesSlice';
import { mainPageReducer } from './main-page/slice';
import { searchByNameReducer } from './searchByName/slice';
import { searchByCategoryReducer } from './searchByCategory/slice';

// Код редюсеров tasksReducer и filtersReducer
export const recipesReducer = combineReducers({
  favorites: favoriteReducer,
  mainpage: mainPageReducer,
  searchByName: searchByNameReducer,
  searchByCategory: searchByCategoryReducer,
});
