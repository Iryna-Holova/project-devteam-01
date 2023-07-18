import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { IDLE, PENDING, REJECTED, RESOLVED } from 'utils/constants';
import {
  addToShoppingListV2Thunk,
  delFromShoppingListV2Thunk,
  getShoppingListV2Thunk,
} from './operations';

//const itemObj = {_id:'',name:'',img:'',mesures:[{recipeID:'',title:'',description:'',img:'',measure:''}]};

const initialState = {
  items: [],

  isLoading: false,
  error: null,
  status: IDLE,
};

export const shoppingListV2Slice = createSlice({
  name: 'shoppingListV2',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getShoppingListV2Thunk.fulfilled, (state, { payload }) => {
        // console.log(payload);
        state.error = null;
        // state.items = [...payload.recipes];

        state.isLoading = false;

        state.status = RESOLVED;
      })
      .addCase(delFromShoppingListV2Thunk.fulfilled, (state, { payload }) => {
        console.log('del');
        state.error = null;
        //console.log(payload);
        const { recipeId, id } = payload;
        const indexInSL = state.items.findIndex(({ _id }) => _id === id);
        const tmp = [...state.items];
        console.log(tmp);
        // before adding check measure
        if (indexInSL >= 0) {
          console.log(state.items[indexInSL], indexInSL);
          // state.items = [
          //   ...state.items,
          //   { _id: id, mesures: [{ recipeId, mesure }] },
          // ];
          console.log(state.items);
        } else {
          // console.log(state.items[indexInSL]);
          // state.items[indexInSL].mesures.push({ recipeId, mesure });
          // console.log(state.items[indexInSL]);
        }

        state.isLoading = false;

        state.status = RESOLVED;
      })
      .addCase(addToShoppingListV2Thunk.fulfilled, (state, { payload }) => {
        console.log('add');
        state.error = null;
        //console.log(payload);
        const { recipeId, id, mesure } = payload;
        const indexInSL = state.items.findIndex(({ _id }) => _id === id);
        // before adding check measure
        if (indexInSL < 0) {
          state.items = [
            ...state.items,
            { _id: id, mesures: [{ recipeId, mesure }] },
          ];
          console.log(state.items);
        } else {
          console.log(state.items[indexInSL]);
          const item = { ...state.items[indexInSL] };
          console.log(item);
          item.mesures.push({ recipeId, mesure });
          state.items = [...state.items, item];
          //state.items[indexInSL].mesures.push({ recipeId, mesure });
          console.log(state.items[indexInSL]);
        }

        state.isLoading = false;

        state.status = RESOLVED;
      })

      .addMatcher(
        isAnyOf(
          getShoppingListV2Thunk.pending,
          addToShoppingListV2Thunk.pending,
          delFromShoppingListV2Thunk.pending
        ),
        state => {
          state.isLoading = true;
          state.status = PENDING;
        }
      )
      .addMatcher(
        isAnyOf(
          getShoppingListV2Thunk.rejected,
          addToShoppingListV2Thunk.rejected,
          delFromShoppingListV2Thunk.rejected
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

export const shoppingListV2Reducer = shoppingListV2Slice.reducer;
