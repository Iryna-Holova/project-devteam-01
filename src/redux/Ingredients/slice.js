import { createSlice } from '@reduxjs/toolkit';
import { getIngredientsThunk } from './operations';
import { IDLE, PENDING, REJECTED, RESOLVED } from 'utils/constants';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  status: IDLE,
};

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getIngredientsThunk.pending, state => {
        state.isLoading = true;
        state.status = PENDING;
        state.items = [];
      })
      .addCase(getIngredientsThunk.fulfilled, (state, { payload }) => {
        console.log('Ingredients', payload);
        state.error = null;
        state.items = [...payload.items];

        state.isLoading = false;
        state.status = RESOLVED;
      })
      .addCase(getIngredientsThunk.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.error = true;
        state.items = [];

        state.status = REJECTED;
      });
  },
});

export const IngredientsReducer = IngredientsSlice.reducer;
