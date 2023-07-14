import { createAsyncThunk } from '@reduxjs/toolkit';
import recipesServices from 'services/api/recipes-api';

export const getOwnRecipesThunk = createAsyncThunk(
  'ownRecipes/getOwnRecipes',
  async ({ limit = 4, page = 1, token }, thunkAPI) => {
    try {
      const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWRjZTkwMjc0ZGFmYWIyN2JlOTkyZSIsImlhdCI6MTY4OTMxODk1OCwiZXhwIjoxNjg5NDAxNzU4fQ.DQNQQlaclstgqgV5Vn8pS-WgHZidrwJMLt5L9RDda9M';
      const response = await recipesServices.getOwnRecipes({
        limit,
        page,
        token,
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
