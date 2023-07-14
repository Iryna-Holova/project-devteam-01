import {
  getRecipesByCategory,
  getRecipe,
  getSearchByTitle,
  getRecipesMain,
} from './recipes';
import { getAllCategories } from './categories';
import { getOwnRecipes, addOwnRecipe, deleteOwnRecipe } from './own';
import { getIngredients } from './ingredients';

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
};

export default recipesServices;
