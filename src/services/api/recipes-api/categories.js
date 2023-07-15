import axios from 'axios';
import { BASE_URL, clearAuthHeader, setAuthHeader } from './common';

axios.defaults.baseURL = BASE_URL;

export const getAllCategories = async ({ token }) => {
  axios.defaults.baseURL = BASE_URL;
  try {
    setAuthHeader(axios, token);

    const { status, data } = await axios.get(`/api/recipes/category-list`);
    clearAuthHeader(axios);
    if (status === 200) {
      //  console.log(data);
      return data;
    } else return null;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message);
  }
};
