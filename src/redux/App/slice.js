import { createSlice } from '@reduxjs/toolkit';

import { LIGHT, MOBILE } from 'utils/constants';

const initialState = {
  theme: LIGHT,
  device: MOBILE,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme(state, { payload }) {
      state.theme = payload;
    },
    setDevice(state, { payload }) {
      state.device = payload;
    },
  },
});

export const { setTheme, setDevice } = appSlice.actions;
export const appReducer = appSlice.reducer;
