import axios from 'axios';
import { BASE_URL} from './common';

export const getOwnRecipes = async ({ page = 1, limit = 4 }) => {
  axios.defaults.baseURL = BASE_URL;
  try {
 //   setAuthHeader(axios, token);

    const { status, data } = await axios.get(
      `/api/own-recipes/?page=${page}&limit=${limit}`
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

export const deleteOwnRecipe = async ({ id, token }) => {
  axios.defaults.baseURL = BASE_URL;
  try {
    // setAuthHeader(axios, token);

    const { status, data } = await axios.delete(`/api/own-recipes/${id}`);
    // clearAuthHeader(axios);
    if (status === 200) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    return Promise.reject(new Error(error.message));
  }
};

export const addOwnRecipe = async ({ data, token }) => {
  axios.defaults.baseURL = BASE_URL;
  try {
    // setAuthHeader(axios, token);

    const { status, data: responseData } = await axios.post('/api/own-recipes', data);
    // clearAuthHeader(axios);
    if (status === 201) {
      return responseData;
    } else {
      return null;
    }
  } catch (error) {
    return Promise.reject(new Error(error.message));
  }
};
