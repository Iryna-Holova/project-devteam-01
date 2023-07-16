import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, verifyUser } from './operations';
import { IDLE, PENDING, REJECTED, RESOLVED } from 'utils/constants';

const initialState = {
  user: { name: null, email: null, avatarURL:null, createdAt:null },
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWFiZWZiNTZjMDgwNmFjMWI1N2JkMiIsImlhdCI6MTY4ODkxODQyOSwiZXhwIjoxNjg5MDAxMjI5fQ.ZFANn7RtafoDYYZ2mRex5Qf_JFU7PJdbQp_9uqLZDnk',
  isLoggedIn: false,
  isRefreshing: false,
  isError: false,
  status: IDLE,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
        state.isLoggedIn = false;
        state.status = PENDING;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.status = RESOLVED;
        console.log(payload);
      })
      .addCase(refreshUser.rejected, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.status = REJECTED;
      })
      .addCase(register.pending, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.status = PENDING;
      })
      .addCase(register.fulfilled, (state, action) => {
        // console.log('register fulfilled', action);
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.status = RESOLVED;
      })
      .addCase(logIn.pending, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.status = PENDING;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        // console.log('loging fullfiled', payload);
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.status = RESOLVED;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.status = RESOLVED;
      })
      .addCase(verifyUser.fulfilled, (state, {payload}) => {
      //  console.log(action);
        //const {status,payload} = action;
         
          state.user = { name: payload.user.name, email: payload.user.email, createdAt:payload.user.createAt,avatarURL:payload.user.avatarURL };
          state.token = payload.token;
          state.isLoggedIn = true;
          state.isRefreshing = false;
          state.status = RESOLVED;
      })
      .addMatcher(
        isAnyOf(logIn.rejected, logOut.rejected, register.rejected),
        state => {
          state.user = { name: null, email: null };
          state.token = null;
          state.isLoggedIn = false;
          state.isRefreshing = false;
          state.status = REJECTED;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
