import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummi.onrender.com';

export const getIngredientsRecipes = async query => {
  try {
    const request = await axios.get(`/api/ingredients?q=${query}`);

    if (request.data.recipes.length === 0) {
      return Promise.reject(
        new Error(`Ingredient with that name: ${query} not found`)
      );
    }
    return await request.data.recipes;
  } catch (error) {
    throw new error(error.message);
  }
};
