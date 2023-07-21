import { createSlice } from '@reduxjs/toolkit';
import { delOwnRecipesThunk, getOwnRecipesThunk } from './operations';
import { IDLE, PENDING, REJECTED, RESOLVED } from 'utils/constants';

const initialState = {
  items: [],
  page: 1,
  limit: 4,
  isLoading: false,
  error: '',
  total: 0,
  pages: 0,
  status: IDLE,
  isError: false,
  isDeleting: false,
  isAdding: false,
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
        state.items = [];
        state.page = 1;
        state.limit = 4;
        state.isLoading = true;
        state.error = '';
        state.total = 0;
        state.pages = 0;
        state.status = PENDING;
        state.isError = false;
        state.isDeleting = false;
        state.isAdding = false;
      })
      .addCase(getOwnRecipesThunk.fulfilled, (state, { payload }) => {
        // console.log('SearchByTitle', payload);
        state.error = null;
        state.items = [...payload.items.recipes];
        state.pages = payload.items.pages;
        state.total = payload.items.total;
        state.isLoading = false;
        state.status = RESOLVED;
        state.isError = false;
      })
      .addCase(getOwnRecipesThunk.rejected, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.error = action.payload;
        state.items = [];
        state.page = 1;
        state.limit = 4;
        state.status = REJECTED;
        state.isError = true;
      })
      .addCase(delOwnRecipesThunk.pending, state => {
        state.isDeleting = true;
      })
      .addCase(delOwnRecipesThunk.fulfilled, (state, { payload }) => {
        // console.log('del', payload);
        state.error = null;
        const index = state.items.findIndex(item => item._id === payload.id);
        if (index >= 0) state.items.splice(index, 1);
        state.total = state.total - 1;
        state.pages = Math.ceil(state.total / state.limit);
        state.isLoading = false;
        state.isError = false;
        state.isDeleting = false;
        state.status = RESOLVED;
      })
      .addCase(delOwnRecipesThunk.rejected, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        state.error = action.payload;
        state.items = [];
        state.page = 1;
        state.limit = 4;
        state.status = REJECTED;
        state.isError = true;
      });
  },
});

export const { setLimit, setPage, setQuery } = ownRecipesSlice.actions;
export const ownRecipesReducer = ownRecipesSlice.reducer;
