import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';
//import recips from 'data/recipes.json';
//import axios from 'axios';
import recipesServices from 'services/api/recipes-api';

export const getFavoriteRecipesThunk = createAsyncThunk(
  'favorite/getFavorite',
  async ({ page = 1, limit = 4 }, thunkAPI) => {
    try {
      const response = await recipesServices.getFavorite({ page, limit });
      // console.log(response);
      return {
        ...response,
        //  totalCount: recips.length,
      };
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToFavoriteRecipesThunk = createAsyncThunk(
  'favorite/addFavorite',
  async (recipe, thunkAPI) => {
    try {
      //  console.log(recipe._id.$oid.toString());
      const response = await recipesServices.addToFavorite({
        id: recipe._id.$oid.toString(),
      });
      //console.log(response);
      if (response.status === 200) return recipe;
      else return thunkAPI.rejectWithValue('Error then try to add to favorite');
      // const response = await axios.patch(
      //   `/recipes/${recipeId}/favorite`,
      //   recipeId
      // );
      //  toast.success('Add to Favorites');
      //return response.data;
    } catch (error) {
      //  toast.error('Something went wrong, please try again later');
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