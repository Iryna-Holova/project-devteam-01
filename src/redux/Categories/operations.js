import { createAsyncThunk } from '@reduxjs/toolkit';
import recipesServices from 'services/api/recipes-api';

//const screenWidth = window.screen.width;

export const getCategoriesList = createAsyncThunk(
  'categories/getCategoriesList',
  async (_, thunkAPI) => {
    try {
      const response = await recipesServices.getAllCategories({});
      return {
        items: response,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
