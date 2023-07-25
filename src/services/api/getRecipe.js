import axios from 'axios';

export const getRecipeById = async id => {
  try {
    const response = await axios.get(`/api/recipes/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
};