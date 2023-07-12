import { createSlice } from '@reduxjs/toolkit';
import { getSearchByNameThunk } from './operations';

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

export const searchByNameSlice = createSlice({
  name: 'searchByName',
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
      .addCase(getSearchByNameThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSearchByNameThunk.fulfilled, (state, { payload }) => {
        // console.log('SearchByName', payload);
        state.error = null;
        state.items = [...payload.items.recipes];
        state.pages = payload.items.pages;
        state.total = payload.items.total;
        state.isLoading = false;
      })
      .addCase(getSearchByNameThunk.rejected, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = true;
        state.items = [];
        state.query = '';
        state.page = 1;
        state.limit = 6;
      });
  },
});

export const { setLimit, setPage, setQuery } = searchByNameSlice.actions;
export const searchByNameReducer = searchByNameSlice.reducer;
