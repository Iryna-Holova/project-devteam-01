import {
  getRecipesByCategory,
  getRecipe,
  getSearchByTitle,
  getRecipesMain,
} from './recipes';
import { getAllCategories } from './categories';
import { getOwnRecipes, addOwnRecipe, deleteOwnRecipe } from './own';
import { getIngredients, getRecipesByIngredient } from './ingredients';
import { getFavorite, addToFavorite, deleteFromFavorite } from './favorite';

const recipesServices = {
  getRecipesMain,
  getRecipesByCategory,
  getRecipe,
  getSearchByTitle,
  getAllCategories,
  getOwnRecipes,
  addOwnRecipe,
  deleteOwnRecipe,
  getIngredients,
  getRecipesByIngredient,
  getFavorite,
  addToFavorite,
  deleteFromFavorite,
};

export default recipesServices;
