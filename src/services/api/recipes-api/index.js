import {
  getRecipesByCategory,
  getRecipe,
  getSearchByTitle,
  getRecipesMain,
} from './recipes';
import { getAllCategories } from './categories';

const recipesServices = {
  getRecipesMain,
  getRecipesByCategory,
  getRecipe,
  getSearchByTitle,
  getAllCategories,
};

export default recipesServices;
