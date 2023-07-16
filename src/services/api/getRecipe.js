import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummi.onrender.com';

export const getRecipeById = async id => {
  try {
    const response = await axios.get(`/api/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.log(error)
  }
};