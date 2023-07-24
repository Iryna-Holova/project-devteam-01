import { createSlice } from '@reduxjs/toolkit';
import {
  addOwnRecipesThunk,
  delOwnRecipesThunk,
  getOwnRecipesThunk,
} from './operations';
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
        state.status = REJECTED;
        state.isError = true;
      })
      .addCase(delOwnRecipesThunk.pending, state => {
        state.isDeleting = true;
        state.status = PENDING;
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
        state.isDeleting = false;
        state.error = action.payload;
        state.status = REJECTED;
        state.isError = true;
      })
      .addCase(addOwnRecipesThunk.pending, state => {
        state.isAdding = true;
        state.status = PENDING;
        state.error = null;
        state.isError = false;
      })
      .addCase(addOwnRecipesThunk.fulfilled, (state, { payload }) => {
        console.log('add', payload);
        state.error = null;
        state.items = [...payload.items, ...state.items];
        state.total = state.total + 1;
        state.pages = Math.ceil(state.total / state.limit);
        state.isLoading = false;
        state.isError = false;
        state.isDeleting = false;
        state.isAdding = false;
        state.status = RESOLVED;
      })
      .addCase(addOwnRecipesThunk.rejected, (state, action) => {
        // console.log(action);
        state.error = action.payload;
        state.isAdding = false;
        state.status = REJECTED;
        state.isError = true;
      });
  },
});

export const { setLimit, setPage } = ownRecipesSlice.actions;
export const ownRecipesReducer = ownRecipesSlice.reducer;
