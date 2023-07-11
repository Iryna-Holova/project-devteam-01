import axios from 'axios';

const BASE_URL = 'https://so-yummi.onrender.com';

axios.defaults.baseURL = BASE_URL;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

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
  }
};

const getRecipe = async ({ id, token }) => {
  try {
    setAuthHeader(token);

    const { status, data } = await axios.get(`/api/recipes/${id}`);
    clearAuthHeader();
    if (status === 200) {
      console.log(data);
      return data;
    } else return null;
  } catch (error) {
    console.log(error.message);
  }
};

export const getSearchByName = async ({
  name = '',
  limit = 6,
  page = 1,
  token,
}) => {
  try {
    setAuthHeader(token);

    const { status, data } = await axios.get(
      `/api/search?q=${name}&limit=${limit}&page=${page}`
    );
    clearAuthHeader();
    if (status === 200) {
      console.log(data);
      return data;
    } else return null;
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllCategories = async ({ token }) => {
  try {
    setAuthHeader(token);

    const { status, data } = await axios.get(`/api/recipes/category-list`);
    clearAuthHeader();
    if (status === 200) {
      console.log(data);
      return data;
    } else return null;
  } catch (error) {
    console.log(error.message);
  }
};

const recipesServices = {
  getRecipesMain,
  getRecipesByCategory,
  getRecipe,
  getSearchByName,
};

export default recipesServices;

console.log(getAllCategories({}));
