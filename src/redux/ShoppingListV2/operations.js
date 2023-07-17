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
  async ({recipeId,id,mesure}, thunkAPI) => {
    try {
    //   console.log(recipe);
    //   const response = await recipesServices.addToFavorite({
    //     id: recipe._id,
    //   });
    //   //console.log(response);
    //   if (response.status === 200) return recipe;
    //   else return thunkAPI.rejectWithValue('Error then try to add to favorite');
      // const response = await axios.patch(
      //   `/recipes/${recipeId}/favorite`,
      //   recipeId
      // );
      //  toast.success('Add to Favorites');
      //return response.data;
      return {recipeId,id,mesure};
    } catch (error) {
 
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFromShoppingListV2Thunk = createAsyncThunk(
  'shoppinglistv2/removeFromShoppingList',
  async (ingredient, thunkAPI) => {
    try {
    //   const response = await recipesServices.deleteFromFavorite({
    //     id: recipeId,
    //   });
    //   if (response.status === 200) return { response, recipeId };
    //   else thunkAPI.rejectWithValue(response.message);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
