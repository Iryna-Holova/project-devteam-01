import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addToFavoriteRecipesThunk,
  getFavoriteRecipesThunk,
  removeFromFavoriteRecipesThunk,
} from './operations';
// import { toast } from 'react-toastify';

import { IDLE, PENDING, REJECTED, RESOLVED } from 'utils/constants';

const initialState = {
  items: [],
  page: 1,
  limit: 4,
  isLoading: false,
  error: null,
  total: 0,
  pages: 0,

  status: IDLE,
};

export const favoriteRecipesSlice = createSlice({
  name: 'favorites',
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
      .addCase(getFavoriteRecipesThunk.fulfilled, (state, { payload }) => {
        // console.log(payload);
        state.error = null;
        state.items = [...payload.recipes];
        state.total = payload.total;
        state.isLoading = false;
        state.pages = payload.pages;
        state.status = RESOLVED;
      })
      .addCase(addToFavoriteRecipesThunk.fulfilled, (state, { payload }) => {
        state.error = null;
        //console.log(payload);
        state.items = [...state.items, payload];
        state.total = state.total + 1;
        state.isLoading = false;
        state.pages = Math.ceil(state.total / state.limit);
        state.status = RESOLVED;
      })
      .addCase(
        removeFromFavoriteRecipesThunk.fulfilled,
        (state, { payload }) => {
          state.error = null;
          //  console.log(payload);

        
         
          const index = state.items.findIndex(item => item._id === payload.recipeId);
    
          state.items.splice(index, 1);
    



          //state.items = [...result];
          state.total = state.total - 1;
          state.isLoading = false;
          state.pages = Math.ceil(state.total / state.limit);
          state.status = RESOLVED;
        }
      )
      .addMatcher(
        isAnyOf(
          getFavoriteRecipesThunk.pending,
          addToFavoriteRecipesThunk.pending,
          removeFromFavoriteRecipesThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.status = PENDING;
        }
      )
      .addMatcher(
        isAnyOf(
          getFavoriteRecipesThunk.rejected,
          addToFavoriteRecipesThunk.rejected,
          removeFromFavoriteRecipesThunk.rejected
        ),
        (state, action) => {
          console.log(action);
          state.isLoading = false;
          state.error = action.payload;
          state.status = REJECTED;
        }
      );
  },
});

export const { setLimit, setPage } = favoriteRecipesSlice.actions;
export const favoriteReducer = favoriteRecipesSlice.reducer;
