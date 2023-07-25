import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import utils from 'utils';

axios.defaults.baseURL = 'https://so-yummi.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/register
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  '/auth/register',
  async (credentials, thunkAPI) => {
    try {
      const currentUrl = utils.getBaseUrl();
      credentials.baseURL = currentUrl;
      // console.log(credentials);
      const res = await axios.post('/api/users/register', credentials);
      //setAuthHeader(res.data.token); Registration doesn't return token
      //console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('api/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('api/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('api/users/current');
      // const result = { ...res.data, token: persistedToken };
      return res.data;
      //return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

/*
 * GET @ /users/users/verify/:verificationToken
 *
 */
export const verifyUser = createAsyncThunk(
  'auth/verify',
  async (verificationToken, thunkAPI) => {
    try {
      const res = await axios.get(`api/users/verify/${verificationToken}`);
      setAuthHeader(res.data.token);
      console.log(res);

      return res.data;
      //return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

/*
 * PATCH @ /users/users/verify/:verificationToken
 *
 */
export const updateUser = createAsyncThunk(
  'auth/update',
  async ({ data }, thunkAPI) => {
    try {
      const response = await axios.patch('/api/users/update', data);

      return response.data;
      //return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
