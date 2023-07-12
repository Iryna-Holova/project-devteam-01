import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCategories } from 'services/api/recipes-api';

//const screenWidth = window.screen.width;

export const getCategoriesList = createAsyncThunk(
  'categories/getCategoriesList',
  async (_, thunkAPI) => {
    try {
      const response = await getAllCategories({});
      return {
        items: response,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
