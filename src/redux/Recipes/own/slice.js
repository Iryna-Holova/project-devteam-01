import { createSlice } from '@reduxjs/toolkit';
import { getOwnRecipesThunk } from './operations';
import { IDLE, PENDING, REJECTED, RESOLVED } from 'utils/constants';

const initialState = {
  items: [],
  query: '',
  page: 1,
  limit: 4,
  isLoading: false,
  error: null,
  total: 0,
  pages: 0,
  status: IDLE,
};

export const ownRecipesSlice = createSlice({
  name: 'ownRecipes',
  initialState,
  reducers: {
    setLimit(state, { payload }) {
      state.limit = payload;
    },
    setQuery(state, { payload }) {
      state.query = payload;
    },
    setPage(state, { payload }) {
      state.page = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getOwnRecipesThunk.pending, state => {
        state.isLoading = true;
        state.status = PENDING;
      })
      .addCase(getOwnRecipesThunk.fulfilled, (state, { payload }) => {
        // console.log('SearchByTitle', payload);
        state.error = null;
        state.items = [...payload.items.recipes];
        state.pages = payload.items.pages;
        state.total = payload.items.total;
        state.isLoading = false;
        state.status = RESOLVED;
      })
      .addCase(getOwnRecipesThunk.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.error = true;
        state.items = [];
        state.query = '';
        state.page = 1;
        state.limit = 4;
        state.status = REJECTED;
      });
  },
});

export const { setLimit, setPage, setQuery } = ownRecipesSlice.actions;
export const ownRecipesReducer = ownRecipesSlice.reducer;
