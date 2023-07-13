export const BASE_URL = 'https://so-yummi.onrender.com';
export const setAuthHeader = (axios, token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = axios => {
  axios.defaults.headers.common.Authorization = '';
};
