import axios from 'axios';
import { BASE_URL } from './common';

export const getOwnRecipes = async ({ page = 1, limit = 4 }) => {
  axios.defaults.baseURL = BASE_URL;
  try {
    const { status, data } = await axios.get(
      `/api/recipes/own/?page=${page}&limit=${limit}`
    );

    if (status === 200) {
      //  console.log(data);
      return data;
    } else return null;
  } catch (error) {
    return Promise.reject(new Error(error.response.data.message));
  }
};

export const deleteOwnRecipe = async ({ id }) => {
  axios.defaults.baseURL = BASE_URL;
  try {
    const { status, data } = await axios.delete(`/api/recipes/own/${id}`);

    if (status === 200) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    return Promise.reject(new Error(error.response.data.message));
  }
};

export const addOwnRecipe = async ({ data }) => {
  axios.defaults.baseURL = BASE_URL;
  try {
    const { status, data: responseData } = await axios.post(
      '/api/recipes/own',
      data
    );

    if (status === 201) {
      return responseData;
    } else {
      return null;
    }
  } catch (error) {
    return Promise.reject(new Error(error.response.data.message));
  }
};
