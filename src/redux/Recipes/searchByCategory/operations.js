import { createAsyncThunk } from '@reduxjs/toolkit';
import recipesServices from 'services/api/recipes-api';
console.log(recipesServices);

//const screenWidth = window.screen.width;

export const getSearchByCategoryThunk = createAsyncThunk(
  'search/getSearchByCategory',
  async ({ limit = 6, query = '', page = 1 }, thunkAPI) => {
    try {
      console.log('SearchByCategoryThunk', query);
      const response = await recipesServices.getRecipesByCategory({
        limit,
        category: query,
        page,
      });
      console.log(response);

      return {
        items: response,
      };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
