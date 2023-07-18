import axios from 'axios';
import { BASE_URL } from './common';

export const getFavorite = async ({ limit = 99999, page = 1 }) => {
  axios.defaults.baseURL = BASE_URL;
  try {
    //console.log(axios.defaults);
    // setAuthHeader(
    //   axios,
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWRjZTkwMjc0ZGFmYWIyN2JlOTkyZSIsImlhdCI6MTY4OTQzMzU1MiwiZXhwIjoxNjg5NTE2MzUyfQ.4cKZG1aHnDuVwc6WPn59Yyj-chgLcK5OkGhhN8dLVXo'
    // );

    const { status, data } = await axios.get(
      `/api/recipes/favorites/?page=${page}&limit=${limit}`
    );
    // clearAuthHeader(axios);

    if (status === 200) {
      // console.log(data);
      return data;
    } else return null;
  } catch (error) {
    // console.log(error);
    return Promise.reject(new Error(error.response.data.message));
  }
};

export const addToFavorite = async ({ id }) => {
  axios.defaults.baseURL = BASE_URL;
  try {
    // setAuthHeader(
    //   axios,
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWRjZTkwMjc0ZGFmYWIyN2JlOTkyZSIsImlhdCI6MTY4OTQzMzU1MiwiZXhwIjoxNjg5NTE2MzUyfQ.4cKZG1aHnDuVwc6WPn59Yyj-chgLcK5OkGhhN8dLVXo'
    // );

    const { status, data } = await axios.patch(
      `/api/recipes/favorites/`,
      { recipeId: id },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    // clearAuthHeader(axios);
    return { status, message: data.message };
    //if (status === 200) {

    //     console.log(data);
    //     return data;
    //   } else return null;
  } catch (error) {
    // console.log(error);
    return Promise.reject(new Error(error.response.data.message));
  }
};

export const deleteFromFavorite = async ({ id }) => {
  axios.defaults.baseURL = BASE_URL;
  try {
    // setAuthHeader(
    //   axios,
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWRjZTkwMjc0ZGFmYWIyN2JlOTkyZSIsImlhdCI6MTY4OTQzMzU1MiwiZXhwIjoxNjg5NTE2MzUyfQ.4cKZG1aHnDuVwc6WPn59Yyj-chgLcK5OkGhhN8dLVXo'
    // );

    const { status, data } = await axios.delete(`/api/recipes/favorites/${id}`);
    // clearAuthHeader(axios);
    console.log(data);
    return { status, message: data.message };
    // if (status === 200) {
    //   console.log(data);
    //   return data;
    // } else return null;
  } catch (error) {
    //  console.log(error);
    return Promise.reject(new Error(error.response.data.message));
  }
};
