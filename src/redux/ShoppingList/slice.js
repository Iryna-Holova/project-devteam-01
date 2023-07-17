import { createSlice } from '@reduxjs/toolkit';
import { fetchIngredients, deleteIngredient } from './operations';

const initialState = {
  ingredients: [],
  isLoading: false,
  error: null,
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredients = action.payload;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(deleteIngredient.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteIngredient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ingredients = state.ingredients.filter(
          (ingredient) => ingredient.id !== action.payload
        );
      })
      .addCase(deleteIngredient.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default shoppingListSlice.reducer;
