import { createAsyncThunk } from '@reduxjs/toolkit';
import recipesServices from 'services/api/recipes-api';

export const getSearchByTitleThunk = createAsyncThunk(
  'search/getSearchByTitle',
  async ({ limit = 6, query = '', page = 1 }, thunkAPI) => {
    try {
      //console.log('Search by Title');
      const response = await recipesServices.getSearchByTitle({
        limit,
        query,
        page,
      });
      //console.log(response);
      return {
        items: response,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
