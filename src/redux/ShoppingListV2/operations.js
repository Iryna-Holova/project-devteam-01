import { createAsyncThunk } from '@reduxjs/toolkit';
import recipesServices from 'services/api/recipes-api';

//import recipesServices from 'services/api/recipes-api';

export const getShoppingListV2Thunk = createAsyncThunk(
  'shoppinglistv2/getShoppingList',
  async (_, thunkAPI) => {
    try {
      const response = await recipesServices.getShoppingList();
      //console.log(response);
      return [
        ...response.map(item => {
          const result = {
            ...item.ingredientId,
          };
          result.measures = item.measures.map(({ recipeId }) => {
            return {
              recipeId: recipeId._id,
              description: recipeId.description,
              title: recipeId.title,
              thumb: recipeId.thumb,
            };
          });
          return result;
        }),
      ];
    } catch (error) {
      //console.log(error.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addToShoppingListV2Thunk = createAsyncThunk(
  'shoppinglistv2/addToShoppingList',
  async (
    { recipeId, id, measure, title, description, thumb, name, img, desc },
    thunkAPI
  ) => {
    try {
      await recipesServices.addToShoppingList({
        recipeId,
        ingredientId: id,
        measure,
      });
      // console.log(response);
      return {
        recipeId,
        id,
        measure,
        title,
        description,
        thumb,
        name,
        img,
        desc,
      };
    } catch (error) {
      //console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const delFromShoppingListV2Thunk = createAsyncThunk(
  'shoppinglistv2/delFromShoppingList',
  async ({ recipeId, id, measure }, thunkAPI) => {
    try {
      await recipesServices.deleteFromShoppingList({
        recipeId,
        ingredientId: id,
        measure,
      });
      //console.log(response);
      return { recipeId, id, measure };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
