import recipes from 'data/recipes';
import categories from 'data/categories';

const getRecipesMain = () => {
  const screenWidth = window.screen.width;

  if (screenWidth < 768) {
    const breakfast = recipes.find(recipe => recipe.category === 'Breakfast');
    const miscellaneous = recipes.find(
      recipe => recipe.category === 'Miscellaneous'
    );
    const vegan = recipes.find(recipe => recipe.category === 'Vegan');
    const dessert = recipes.find(recipe => recipe.category === 'Dessert');

    return { breakfast, miscellaneous, vegan, dessert };
  }

  if (screenWidth < 1440) {
    const breakfast = recipes
      .filter(recipe => recipe.category === 'Breakfast')
      .slice(0, 2);
    const miscellaneous = recipes
      .filter(recipe => recipe.category === 'Miscellaneous')
      .slice(0, 2);
    const vegan = recipes
      .filter(recipe => recipe.category === 'Vegan')
      .slice(0, 2);
    const dessert = recipes
      .filter(recipe => recipe.category === 'Dessert')
      .slice(0, 2);

    return { breakfast, miscellaneous, vegan, dessert };
  }

  const breakfast = recipes
    .filter(recipe => recipe.category === 'Breakfast')
    .slice(0, 4);
  const miscellaneous = recipes
    .filter(recipe => recipe.category === 'Miscellaneous')
    .slice(0, 4);
  const vegan = recipes
    .filter(recipe => recipe.category === 'Vegan')
    .slice(0, 4);
  const dessert = recipes
    .filter(recipe => recipe.category === 'Dessert')
    .slice(0, 4);

  return { breakfast, miscellaneous, vegan, dessert };
};

const getCategories = () => {
  const array = [];
  categories.map(category => array.push(category.name));
  return array;
};

const getRecipesByCategory = (category = 'Beef') => {
  const response = recipes.filter(recipe => recipe.category === category);
  return response;
};

const getRecipe = () => {
  return recipes[0];
};

const recipesServices = {
  getRecipesMain,
  getCategories,
  getRecipesByCategory,
  getRecipe,
};

export default recipesServices;
