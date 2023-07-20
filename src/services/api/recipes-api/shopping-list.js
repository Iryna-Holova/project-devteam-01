import axios from 'axios';
//import { BASE_URL } from './common';

export const getShoppingList = async () => {
  try {
    const response = await axios.get('api/shopping-list');
    // console.log(response.data);
    return response.data;
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
};

export const addToShoppingList = async ({
  ingredientId,
  recipeId,
  measure,
}) => {
  try {
    const response = await axios.patch('api/shopping-list', {
      ingredientId,
      recipeId,
      measure,
    });
    //  console.log(response);
    return response.data;
  } catch (error) {
    //console.log(error);
    return Promise.reject(error.response.data.message);
  }
};

export const deleteFromShoppingList = async ({
  ingredientId,
  recipeId,
  measure,
}) => {
  try {
    const response = await axios.delete('api/shopping-list', {
      data: {
        ingredientId,
        recipeId,
        measure,
      },
    });
    //console.log(response);
    return response.data;
  } catch (error) {
    //console.log(error);
    return Promise.reject(error.response.data.message);
  }
};
