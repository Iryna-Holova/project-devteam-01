import { createSlice } from '@reduxjs/toolkit';
import { getSearchByTitleThunk } from './operations';

const initialState = {
  items: [],
  query: '',
  page: 1,
  limit: 6,
  isLoading: false,
  error: null,
  total: 0,
  pages: 0,
};

export const searchByTitleSlice = createSlice({
  name: 'searchByTitle',
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
      .addCase(getSearchByTitleThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSearchByTitleThunk.fulfilled, (state, { payload }) => {
        // console.log('SearchByTitle', payload);
        state.error = null;
        state.items = [...payload.items.recipes];
        state.pages = payload.items.pages;
        state.total = payload.items.total;
        state.isLoading = false;
      })
      .addCase(getSearchByTitleThunk.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.error = true;
        state.items = [];
        state.query = '';
        state.page = 1;
        state.limit = 6;
      });
  },
});

export const { setLimit, setPage, setQuery } = searchByTitleSlice.actions;
export const searchByTitleReducer = searchByTitleSlice.reducer;
