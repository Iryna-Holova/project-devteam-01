import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSearchByName } from 'services/api/recipes-api';

//const screenWidth = window.screen.width;

export const getSearchByNameThunk = createAsyncThunk(
  'search/getSearchByName',
  async ({ limit = 6, query = '', page = 1 }, thunkAPI) => {
    try {
      const response = await getSearchByName({ limit, query, page });
      //console.log(response);
      return {
        items: response,
      };
    } catch (error) {
      //  toast.error('Something went wrong, please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
