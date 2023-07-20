import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { IDLE, PENDING, REJECTED, RESOLVED } from 'utils/constants';
import {
  addToShoppingListV2Thunk,
  delFromShoppingListV2Thunk,
  getShoppingListV2Thunk,
} from './operations';

//const itemObj = {_id:'',name:'',img:'',desc:'',measures:[{recipeID:'',title:'',description:'',img:'',measure:''}]};

const initialState = {
  items: [],

  isLoading: false,
  error: null,
  status: IDLE,
  isDeleting: false,
};

export const shoppingListV2Slice = createSlice({
  name: 'shoppingListV2',
  initialState,
  reducers: {
    clearError(state, { payload }) {
      state.error = null;
      state.status = IDLE;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getShoppingListV2Thunk.fulfilled, (state, { payload }) => {
        // console.log(payload);
        state.error = null;
        state.items = [...payload];

        state.isLoading = false;

        state.status = RESOLVED;
      })
      .addCase(delFromShoppingListV2Thunk.fulfilled, (state, { payload }) => {
        state.error = null;
        state.isDeleting = false;
        const { recipeId, id } = payload;
        const indexInSL = state.items.findIndex(({ _id }) => _id === id);
        const tmp = state.items[indexInSL];

        const measures = tmp.measures.filter(
          measure => measure.recipeId !== recipeId
        );

        if (measures.length > 0) {
          tmp.measures = [...measures];

          if (indexInSL >= 0) {
            state.items.splice(indexInSL, 1, tmp);
            //state.items = [...state.items, { ...tmp }];
          }
          // console.log(state.items);
        } else state.items.splice(indexInSL, 1);

        state.isLoading = false;

        state.status = RESOLVED;
      })
      .addCase(addToShoppingListV2Thunk.fulfilled, (state, { payload }) => {
        // console.log('add', state);
        state.error = null;
        //console.log(payload);
        const {
          recipeId,
          id,
          measure,
          title,
          description,
          thumb,
          name,
          img,
          desc,
        } = payload;
        const indexInSL = state.items.findIndex(({ _id }) => _id === id);
        // before adding check measure !!!!!!!
        if (indexInSL < 0) {
          state.items = [
            ...state.items,
            {
              _id: id,
              name,
              img,
              desc,
              measures: [{ recipeId, measure, title, description, thumb }],
            },
          ];
        } else {
          const item = { ...state.items[indexInSL] };

          item.measures.push({ recipeId, measure, title, description, thumb });
          state.items.splice(indexInSL, 1, item);
        }

        state.isLoading = false;

        state.status = RESOLVED;
      })
      .addCase(delFromShoppingListV2Thunk.pending, state => {
        state.isDeleting = true;
      })
      .addCase(getShoppingListV2Thunk.pending, state => {
        state.isLoading = true;
        state.isDeleting = false;
        state.status = PENDING;
      })
      .addMatcher(isAnyOf(addToShoppingListV2Thunk.pending), state => {
        state.isLoading = false;
        state.status = PENDING;
      })
      .addMatcher(
        isAnyOf(
          getShoppingListV2Thunk.rejected,
          addToShoppingListV2Thunk.rejected,
          delFromShoppingListV2Thunk.rejected
        ),
        (state, action) => {
          // console.log(action);
          state.isLoading = false;
          state.error = action.payload;
          state.status = REJECTED;
          state.isDeleting = false;
        }
      );
  },
});

export const { clearError } = shoppingListV2Slice.actions;
export const shoppingListV2Reducer = shoppingListV2Slice.reducer;
