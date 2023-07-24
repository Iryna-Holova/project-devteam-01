import axios from 'axios';
import { BASE_URL } from './common';

axios.defaults.baseURL = BASE_URL;

//*****************
//*
//****************
export const getRecipesMain = async ({ limit = 1 }) => {
  try {
    axios.defaults.baseURL = BASE_URL;
    const { status, data } = await axios.get(
      `/api/recipes/main-page/?limit=${limit}`
    );

    if (status === 200) {
      // console.log(data);
      return data;
    } else return null;
  } catch (error) {
    return Promise.reject(new Error(error.response.data.message));
  }
};

export const getRecipesByCategory = async ({
  query = 'Beef',
  limit = 8,
  page = 1,
}) => {
  axios.defaults.baseURL = BASE_URL;
  try {
    const { status, data } = await axios.get(
      `/api/recipes/categories/${query}?limit=${limit}&page=${page}`
    );

    if (status === 200) {
      //console.log(data);
      return data;
    } else return null;
  } catch (error) {
    return Promise.reject(new Error(error.response.data.message));
  }
};

export const getRecipe = async ({ id }) => {
  axios.defaults.baseURL = BASE_URL;
  try {
    const { status, data } = await axios.get(`/api/recipes/${id}`);

    if (status === 200) {
      //  console.log(data);
      return data;
    } else return null;
  } catch (error) {
    return Promise.reject(new Error(error.response.data.message));
  }
};

export const getSearchByTitle = async ({ query = '', limit = 6, page = 1 }) => {
  axios.defaults.baseURL = BASE_URL;
  try {
    const queryStr = query !== '' ? `q=${query}` : '';

    const { status, data } = await axios.get(
      `/api/recipes/search?${queryStr}&limit=${limit}&page=${page}`
    );

    if (status === 200) {
      //   console.log(data);
      return data;
    } else return null;
  } catch (error) {
    return Promise.reject(new Error(error.response.data.message));
  }
};
