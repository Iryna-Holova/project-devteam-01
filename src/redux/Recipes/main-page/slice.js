import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getMainPage } from './operations';

const initialState = {
  items: null,
  isLoading: false,
  error: null,
};

export const mainPageSlice = createSlice({
  name: 'main-page',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getMainPage.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMainPage.fulfilled, (state, { payload }) => {
        console.log(state, payload);
        state.error = null;
        state.items = { ...payload.items };
        state.isLoading = false;
      })
      .addCase(getMainPage.rejected, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = null;
        state.items = null;
      });
  },
});

export const mainPageReducer = mainPageSlice.reducer;
