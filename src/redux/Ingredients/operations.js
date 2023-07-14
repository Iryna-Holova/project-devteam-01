import { createAsyncThunk } from '@reduxjs/toolkit';
import recipesServices from '../../services/api/recipes-api';

export const getIngredientsThunk = createAsyncThunk(
  'Ingredients/getIngredients',
  async thunkAPI => {
    try {
      const response = await recipesServices.getIngredients({});
      //      console.log(response);
      return {
        items: response,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
