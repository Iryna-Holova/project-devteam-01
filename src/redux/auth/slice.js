import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, verifyUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWFiZWZiNTZjMDgwNmFjMWI1N2JkMiIsImlhdCI6MTY4ODkxODQyOSwiZXhwIjoxNjg5MDAxMjI5fQ.ZFANn7RtafoDYYZ2mRex5Qf_JFU7PJdbQp_9uqLZDnk',
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        console.log(payload);
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })
      .addCase(verifyUser.fulfilled, (state, { payload }) => {
        if (payload.status === 200) {
          state.user = { name: payload?.user, email: payload?.email };
          state.token = payload?.token;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        } else {
          state.user = { name: null, email: null };
          state.token = null;
          state.isLoggedIn = false;
          state.isRefreshing = false;
        }
      })
      .addMatcher(
        isAnyOf(refreshUser.rejected, logIn.rejected, logOut.rejected),
        state => {
          state.user = { name: null, email: null };
          state.token = null;
          state.isLoggedIn = false;
          state.isRefreshing = false;
        }
      );
  },
});

export const authReducer = authSlice.reducer;