import { createAsyncThunk } from '@reduxjs/toolkit';

import recipesServices from 'services/api/recipes-api';

export const getFavoriteRecipesThunk = createAsyncThunk(
  'favorite/getFavorite',
  async ({ page = 1, limit = 4 }, thunkAPI) => {
    try {
      const response = await recipesServices.getFavorite({ page, limit });

      return {
        ...response,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToFavoriteRecipesThunk = createAsyncThunk(
  'favorite/addFavorite',
  async (recipe, thunkAPI) => {
    try {
      const response = await recipesServices.addToFavorite({
        id: recipe._id,
      });

      if (response.status === 200) return recipe;
      else return thunkAPI.rejectWithValue('Error then try to add to favorite');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFromFavoriteRecipesThunk = createAsyncThunk(
  'favorite/removeFavorite',
  async (recipeId, thunkAPI) => {
    try {
      const response = await recipesServices.deleteFromFavorite({
        id: recipeId,
      });
      if (response.status === 200) return { response, recipeId };
      else thunkAPI.rejectWithValue(response.message);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
