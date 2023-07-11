import { combineReducers } from 'redux';
import { favoritesReducer } from './favorite/favoriteRecipesSlice';

import { getRecipesMain } from '../../services/api/recipes-api';

// Код редюсеров tasksReducer и filtersReducer
export const recipesReducer = combineReducers({
  favorites: favoritesReducer,
});
