import axios from 'axios';

const BASE_URL = 'https://so-yummi.onrender.com';

axios.defaults.baseURL = BASE_URL;

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWRjZTkwMjc0ZGFmYWIyN2JlOTkyZSIsImlhdCI6MTY4OTExMjM4NCwiZXhwIjoxNjg5MTk1MTg0fQ.lk-w0gXTD2OPg6CAjtmxjVBmAd48vJdfDd4a9dzYD6g';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

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
    console.log(error.message);
    return Promise.reject(error.message);
  }
};

export const getRecipesByCategory = async ({
  category = 'Beef',
  limit = 8,
  page = 1,
  token,
}) => {
  try {
    setAuthHeader(token);

    const { status, data } = await axios.get(
      `/api/recipes/categories/${category}?limit=${limit}&page=${page}`
    );
    clearAuthHeader();
    if (status === 200) {
      //console.log(data);
      return data;
    } else return null;
  } catch (error) {
    console.log(error.message);
    return Promise.reject(error.message);
  }
};

const getRecipe = async ({ id, token }) => {
  try {
    setAuthHeader(token);

    const { status, data } = await axios.get(`/api/recipes/${id}`);
    clearAuthHeader();
    if (status === 200) {
      //  console.log(data);
      return data;
    } else return null;
  } catch (error) {
    console.log(error.message);
    return Promise.reject(error.message);
  }
};

export const getSearchByName = async ({
  query = '',
  limit = 6,
  page = 1,
  token,
}) => {
  try {
    setAuthHeader(token);
    const queryStr = query !== '' ? `q=${query}` : '';

    const { status, data } = await axios.get(
      `/api/search?${queryStr}&limit=${limit}&page=${page}`
    );
    clearAuthHeader();
    if (status === 200) {
      //   console.log(data);
      return data;
    } else return null;
  } catch (error) {
    console.log(error.message);
    return Promise.reject(error.message);
  }
};

export const getAllCategories = async ({ token }) => {
  try {
    setAuthHeader(token);

    const { status, data } = await axios.get(`/api/recipes/category-list`);
    clearAuthHeader();
    if (status === 200) {
      //  console.log(data);
      return data;
    } else return null;
  } catch (error) {
    console.log(error.message);
    return Promise.reject(error.message);
  }
};

//*****************
//*
//****************

const recipesServices = {
  getRecipesMain,
  getRecipesByCategory,
  getRecipe,
  getSearchByName,
  getAllCategories,
};

export default recipesServices;

//console.log(getAllCategories({}));
