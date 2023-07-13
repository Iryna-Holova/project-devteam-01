import { createSlice } from '@reduxjs/toolkit';
import { getSearchByCategoryThunk } from './operations';

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

export const searchByCategorySlice = createSlice({
  name: 'searchByCategory',
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
      .addCase(getSearchByCategoryThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSearchByCategoryThunk.fulfilled, (state, { payload }) => {
        //console.log('SearchByCategory', payload);
        state.error = null;
        state.items = [...payload.items.recipes];
        state.pages = payload.items.pages;
        state.total = payload.items.total;
        state.isLoading = false;
      })
      .addCase(getSearchByCategoryThunk.rejected, (state, action) => {
        //  console.log('SearchByCategory rejected', action);
        state.isLoading = false;
        state.error = true;
        state.items = [];
        state.query = '';
        state.page = 1;
        state.limit = 6;
      });
  },
});

export const { setLimit, setPage, setQuery } = searchByCategorySlice.actions;
export const searchByCategoryReducer = searchByCategorySlice.reducer;
