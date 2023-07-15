import { createAsyncThunk } from '@reduxjs/toolkit';
import recipesServices from 'services/api/recipes-api';
import { SEARCH_BY_TITLE } from 'utils/constants';

export const getSearchByThunk = createAsyncThunk(
  'search/getSearchBy',
  async (
    { limit = 6, query = '', page = 1, method = SEARCH_BY_TITLE },
    thunkAPI
  ) => {
    try {
      if (method === SEARCH_BY_TITLE) {
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
      } else {
        const response = await recipesServices.getRecipesByIngredient({
          limit,
          query,
          page,
        });
        console.log(response);
        return {
          items: response,
        };
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
