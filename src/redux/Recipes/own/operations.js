import { createAsyncThunk } from '@reduxjs/toolkit';
import recipesServices from 'services/api/recipes-api';

export const getOwnRecipesThunk = createAsyncThunk(
  'ownRecipes/getOwnRecipes',
  async ({ limit = 4, page = 1, token }, thunkAPI) => {
    try {
      const response = await recipesServices.getOwnRecipes({
        limit,
        page,
        token,
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
