import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummi.onrender.com';

export const getTitleRecipes = async query => {
  const request = await axios.get(`/api/search?q=${query}`);

  if (request.status === 404) {
    return Promise.reject(
      new Error(`Title with that name: ${query} not found`)
    );
  }

  return await request.data.recipes;
};
