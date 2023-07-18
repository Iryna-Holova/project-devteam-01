import { createAsyncThunk } from '@reduxjs/toolkit';

//import recipesServices from 'services/api/recipes-api';

export const getShoppingListV2Thunk = createAsyncThunk(
  'shoppinglistv2/getShoppingList',
  async (_, thunkAPI) => {
    try {
      //   const response = await recipesServices.getFavorite({ page, limit });
      //   // console.log(response);
      //   return {
      //     ...response,
      //     //  totalCount: recips.length,
      //   };
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToShoppingListV2Thunk = createAsyncThunk(
  'shoppinglistv2/addToShoppingList',
  async ({ recipeId, id, mesure }, thunkAPI) => {
    try {
      return { recipeId, id, mesure };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const delFromShoppingListV2Thunk = createAsyncThunk(
  'shoppinglistv2/delFromShoppingList',
  async ({ recipeId, id, mesure }, thunkAPI) => {
    try {
      return { recipeId, id, mesure };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
