import { createAsyncThunk } from '@reduxjs/toolkit';
import recipesServices from 'services/api/recipes-api';

export const getOwnRecipesThunk = createAsyncThunk(
  'ownRecipes/getOwnRecipes',
  async ({ limit = 4, page = 1 }, thunkAPI) => {
    try {
      const response = await recipesServices.getOwnRecipes({
        limit,
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

export const addOwnRecipesThunk = createAsyncThunk(
  'ownRecipes/addOwnRecipes',
  async ({ data }, thunkAPI) => {
    try {
      const response = await recipesServices.addOwnRecipe({
        data,
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

export const delOwnRecipesThunk = createAsyncThunk(
  'ownRecipes/delOwnRecipes',
  async ({ id }, thunkAPI) => {
    try {
      //console.log('delete');
      await recipesServices.deleteOwnRecipe({
        id,
      });
      //console.log(response);
      return {
        id,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
