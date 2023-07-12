import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRecipesByCategory } from 'services/api/recipes-api';

//const screenWidth = window.screen.width;

export const getSearchByCategoryThunk = createAsyncThunk(
  'search/getSearchByNameThunk',
  async ({ limit = 6, query = '', page = 1 }, thunkAPI) => {
    try {
      //  console.log('CategoryThunk', query);
      const response = await getRecipesByCategory({
        limit,
        category: query,
        page,
      });
      // console.log(response);

      return {
        items: response,
      };
    } catch (error) {
      //   console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
