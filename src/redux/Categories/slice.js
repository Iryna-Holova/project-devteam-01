import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCategories, getCategoriesList } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCategoriesList.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCategoriesList.fulfilled, (state, { payload }) => {
        //console.log(payload);
        state.error = null;
        state.items = [...payload.items];
        state.isLoading = false;
      })
      .addCase(getCategoriesList.rejected, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = null;
        state.items = [];
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
