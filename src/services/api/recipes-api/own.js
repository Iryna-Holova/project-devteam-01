import axios from 'axios';
import { BASE_URL } from './common';

export const getOwnRecipes = async ({ page = 1, limit = 4 }) => {
  axios.defaults.baseURL = BASE_URL;
  try {
    //   setAuthHeader(axios, token);

    const { status, data } = await axios.get(
      `/api/recipes/own/?page=${page}&limit=${limit}`
    );
    // clearAuthHeader(axios);
    if (status === 200) {
      //  console.log(data);
      return data;
    } else return null;
  } catch (error) {
    return Promise.reject(new Error(error.message));
  }
};

export const deleteOwnRecipe = async ({ id, token }) => {};

export const addOwnRecipe = async ({ data, token }) => {};
