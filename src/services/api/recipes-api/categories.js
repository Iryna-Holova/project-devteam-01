import axios from 'axios';
import { BASE_URL } from './common';

axios.defaults.baseURL = BASE_URL;

export const getAllCategories = async () => {
  axios.defaults.baseURL = BASE_URL;
  try {
    // setAuthHeader(axios, token);

    const { status, data } = await axios.get(`/api/recipes/category-list`);
    //  clearAuthHeader(axios);
    if (status === 200) {
      //  console.log(data);
      return data;
    } else return null;
  } catch (error) {
    // console.log(error);
    return Promise.reject(new Error(error.response.data.message));
  }
};
