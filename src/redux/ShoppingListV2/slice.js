import { createSlice, isAnyOf } from '@reduxjs/toolkit';


import { IDLE, PENDING, REJECTED, RESOLVED } from 'utils/constants';
import { addToShoppingListV2Thunk, getShoppingListV2Thunk, removeFromShoppingListV2Thunk } from './operations';

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
      .addCase(addToShoppingListV2Thunk.fulfilled, (state, { payload }) => {
        state.error = null;
        console.log(payload);
        const {recipeId,id,mesure} = payload;
        const indexInSL = state.items.findIndex(({_id})=>_id===id)
        if (indexInSL<0) state.items = [...state.items, {_id:id,mesures:[{recipeId,mesure}]}];
        else state.items[indexInSL].mesures.push({recipeId,mesure}) 
        
        
        state.isLoading = false;
      
        state.status = RESOLVED;
      })
      .addCase(
        removeFromShoppingListV2Thunk.fulfilled,
        (state, { payload }) => {
          state.error = null;
          //  console.log(payload);

        //   const result = state.items.filter(item => {
        //     // console.log(item, payload.recipeId);
        //     return item._id !== payload.recipeId;
        //   });
         // console.log(result);
       //   state.items = [...result];
          
          state.isLoading = false;
          
          state.status = RESOLVED;
        }
      )
      .addMatcher(
        isAnyOf(
            getShoppingListV2Thunk.pending,
          addToShoppingListV2Thunk.pending,
          removeFromShoppingListV2Thunk.pending
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
          removeFromShoppingListV2Thunk.rejected
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
