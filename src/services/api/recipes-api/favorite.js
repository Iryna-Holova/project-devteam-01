import axios from 'axios';
import { BASE_URL } from './common';

export const getFavorite = async ({ limit = 99999, page = 1 }) => {
  axios.defaults.baseURL = BASE_URL;
  try {
    const { status, data } = await axios.get(
      `/api/recipes/favorites/?page=${page}&limit=${limit}`
    );

    if (status === 200) {
      return data;
    } else return null;
  } catch (error) {
    return Promise.reject(new Error(error.response.data.message));
  }
};

export const addToFavorite = async ({ id }) => {
  axios.defaults.baseURL = BASE_URL;
  try {
    const { status, data } = await axios.patch(
      `/api/recipes/favorites/`,
      { recipeId: id },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return { status, message: data.message };
  } catch (error) {
    // console.log(error);
    return Promise.reject(new Error(error.response.data.message));
  }
};

export const deleteFromFavorite = async ({ id }) => {
  axios.defaults.baseURL = BASE_URL;
  try {
    const { status, data } = await axios.delete(`/api/recipes/favorites/${id}`);
    return { status, message: data.message };
  } catch (error) {
    //  console.log(error);
    return Promise.reject(new Error(error.response.data.message));
  }
};
