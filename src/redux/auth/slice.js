import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, verifyUser } from './operations';
import { IDLE, PENDING, REJECTED, RESOLVED } from 'utils/constants';

const initialState = {
  user: { _id: '', name: null, email: null, avatarURL: null, createdAt: '' },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
  isError: false,
  status: IDLE,
  error: '',
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
        state.error = '';
        state.isError = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = {
          name: payload.user.name,
          email: payload.user.email,
          createdAt: payload.user.createdAt,
          avatarURL: payload.user.avatarURL,
          _id: payload.user._id,
        };
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.status = RESOLVED;
        state.error = '';
        state.isError = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.user = {
          _id: '',
          name: null,
          email: null,
          avatarURL: null,
          createdAt: '',
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.status = REJECTED;

        // state.error = action.payload;
        // state.isError = true;
      })
      .addCase(register.pending, state => {
        state.user = {
          _id: '',
          name: null,
          email: null,
          avatarURL: null,
          createdAt: '',
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.status = PENDING;
        state.error = '';
        state.isError = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = {
          _id: '',
          name: null,
          email: null,
          avatarURL: null,
          createdAt: '',
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.status = RESOLVED;
        state.error = '';
        state.isError = false;
      })
      .addCase(logIn.pending, state => {
        state.user = {
          _id: '',
          name: null,
          email: null,
          avatarURL: null,
          createdAt: '',
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.status = PENDING;
        state.error = '';
        state.isError = false;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = {
          name: payload.user.name,
          email: payload.user.email,
          createdAt: payload.user.createdAt,
          avatarURL: payload.user.avatarURL,
          _id: payload.user._id,
        };
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.status = RESOLVED;
        state.error = '';
        state.isError = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {
          _id: '',
          name: null,
          email: null,
          avatarURL: null,
          createdAt: '',
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.status = RESOLVED;
        state.error = '';
        state.isError = false;
      })
      .addCase(verifyUser.fulfilled, (state, { payload }) => {
        //const {status,payload} = action;

        state.user = {
          name: payload.user.name,
          email: payload.user.email,
          createdAt: payload.user.createdAt,
          avatarURL: payload.user.avatarURL,
          _id: payload.user._id,
        };
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.status = RESOLVED;
        state.error = '';
        state.isError = false;
      })
      .addMatcher(
        isAnyOf(logIn.rejected, logOut.rejected, register.rejected),
        (state, action) => {
          state.user = state.user = {
            _id: '',
            name: null,
            email: null,
            avatarURL: null,
            createdAt: '',
          };
          state.token = null;
          state.isLoggedIn = false;
          state.isRefreshing = false;
          state.status = REJECTED;

          state.error = action.payload;
          state.isError = true;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
