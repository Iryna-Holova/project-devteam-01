import axios from 'axios';
import { BASE_URL } from './common';

axios.defaults.baseURL = BASE_URL;

export const getIngredients = async () => {
  axios.defaults.baseURL = BASE_URL;
  try {
    //setAuthHeader(axios, token);

    const { status, data } = await axios.get(`/api/ingredients/list`);
    // clearAuthHeader(axios);
    if (status === 200) {
      //  console.log(data);
      return data;
    } else return null;
  } catch (error) {
    return Promise.reject(new Error(error.response.data.message));
  }
};

export const getRecipesByIngredient = async ({
  limit = 6,
  page = 1,
  query,
}) => {
  axios.defaults.baseURL = BASE_URL;
  try {
    //setAuthHeader(axios, token);

    const { status, data } = await axios.get(
      `/api/ingredients/?q=${query}&page=${page}&limit=${limit}`
    );
    // clearAuthHeader(axios);
    if (status === 200) {
      //  console.log(data);
      return data;
    } else return null;
  } catch (error) {
    return Promise.reject(new Error(error.response.data.message));
  }
};
