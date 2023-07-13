import axios from 'axios';
import { BASE_URL, clearAuthHeader, setAuthHeader } from './common';

axios.defaults.baseURL = BASE_URL;

// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWRjZTkwMjc0ZGFmYWIyN2JlOTkyZSIsImlhdCI6MTY4OTExMjM4NCwiZXhwIjoxNjg5MTk1MTg0fQ.lk-w0gXTD2OPg6CAjtmxjVBmAd48vJdfDd4a9dzYD6g';

//*****************
//*
//****************
export const getRecipesMain = async ({ limit = 1, token }) => {
  try {
    setAuthHeader(token);

    const { status, data } = await axios.get(
      `/api/recipes/main-page/?limit=${limit}`
    );
    clearAuthHeader();
    if (status === 200) {
      // console.log(data);
      return data;
    } else return null;
  } catch (error) {
    return Promise.reject(`Error no retrive recipes to main page`);
  }
};

export const getRecipesByCategory = async ({
  query = 'Beef',
  limit = 8,
  page = 1,
  token,
}) => {
  try {
    setAuthHeader(axios, token);
    console.log('getRecipesByCategory', query);

    const { status, data } = await axios.get(
      `/api/recipes/categories/${query}?limit=${limit}&page=${page}`
    );
    clearAuthHeader(axios);
    if (status === 200) {
      //console.log(data);
      return data;
    } else return null;
  } catch (error) {
    return Promise.reject(`Erron on retrive recipes by category ${query}`);
  }
};

export const getRecipe = async ({ id, token }) => {
  try {
    setAuthHeader(token);

    const { status, data } = await axios.get(`/api/recipes/${id}`);
    clearAuthHeader();
    if (status === 200) {
      //  console.log(data);
      return data;
    } else return null;
  } catch (error) {
    return Promise.reject(`Error on get recipe by id ${id}`);
  }
};

export const getSearchByTitle = async ({
  query = '',
  limit = 6,
  page = 1,
  token,
}) => {
  try {
    setAuthHeader(axios, token);
    const queryStr = query !== '' ? `q=${query}` : '';

    const { status, data } = await axios.get(
      `/api/search?${queryStr}&limit=${limit}&page=${page}`
    );
    clearAuthHeader(axios);
    if (status === 200) {
      //   console.log(data);
      return data;
    } else return null;
  } catch (error) {
    return Promise.reject(`Error on search by title ${query}`);
  }
};

//*****************
//*
//****************

//console.log(getAllCategories({}));
