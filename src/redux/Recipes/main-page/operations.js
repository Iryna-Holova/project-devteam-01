import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRecipesMain } from 'services/api/recipes-api';

//const screenWidth = window.screen.width;

export const getMainPage = createAsyncThunk(
  'main-page/getMainPage',
  async ({ limit = 1 }, thunkAPI) => {
    try {
      const response = await getRecipesMain(limit);
      //      console.log(response);
      return {
        items: response,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
