import {
  getRecipesByCategory,
  getRecipe,
  getSearchByTitle,
  getRecipesMain,
} from './recipes';
import { getAllCategories } from './categories';
import { getOwnRecipes, addOwnRecipe, deleteOwnRecipe } from './own';

const recipesServices = {
  getRecipesMain,
  getRecipesByCategory,
  getRecipe,
  getSearchByTitle,
  getAllCategories,
  getOwnRecipes,
  addOwnRecipe,
  deleteOwnRecipe,
};

export default recipesServices;
