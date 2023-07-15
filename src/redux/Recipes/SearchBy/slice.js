import { createSlice } from '@reduxjs/toolkit';
import { getSearchByThunk } from './operations';
import {
  IDLE,
  PENDING,
  REJECTED,
  RESOLVED,
  SEARCH_BY_TITLE,
} from 'utils/constants';

const initialState = {
  items: [],
  query: '',
  page: 1,
  limit: 6,
  isLoading: false,
  error: null,
  total: 0,
  pages: 0,
  searchBy: SEARCH_BY_TITLE,
  status: IDLE,
};

export const searchBySlice = createSlice({
  name: 'searchBy',
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
    setMethod(state, { payload }) {
      state.method = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getSearchByThunk.pending, state => {
        state.isLoading = true;
        state.status = PENDING;
      })
      .addCase(getSearchByThunk.fulfilled, (state, { payload }) => {
        // console.log('SearchByTitle', payload);
        state.error = null;
        state.items = [...payload.items.recipes];
        state.pages = payload.items.pages;
        state.total = payload.items.total;
        state.isLoading = false;
        state.status = RESOLVED;
      })
      .addCase(getSearchByThunk.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.error = action?.payload ? action?.payload : 'Error';
        state.items = [];
        state.query = '';
        state.page = 1;
        state.limit = 6;
        state.status = REJECTED;
      });
  },
});

export const { setLimit, setPage, setQuery, setMethod } = searchBySlice.actions;
export const searchByReducer = searchBySlice.reducer;
