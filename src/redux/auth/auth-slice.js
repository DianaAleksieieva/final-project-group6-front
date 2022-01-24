import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';
import { tokenToAxios } from '../../api/settings';

const initialState = {
  user: { name: null, email: null, balance: null },

  token: null,
  refreshToken: null,
  expiresIn: null,
  isLoggedIn: false,
  isRegistered: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.expiresIn = action.payload.expiresIn;
      state.isLoggedIn = true;
      state.isRegistered = true;
      tokenToAxios.set(action.payload.token);
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.expiresIn = action.payload.expiresIn;
      state.isLoggedIn = true;
      tokenToAxios.set(action.payload.token);
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.refreshToken = null;
      state.expiresIn = null;
      state.isLoggedIn = false;
      tokenToAxios.set(null);
    },
    [authOperations.refreshToken.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.expiresIn = action.payload.expiresIn;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
      tokenToAxios.set(action.payload.token);
    },
    // [authOperations.refreshToken.rejected](state, action) {
    //   state.user = null;
    //   state.token = null;
    //   state.expiresIn = null;
    //   state.refreshToken = null;
    //   state.isLoggedIn = true;
    // },
    // [authOperations.refreshToken.pending](state, action) {
    //   state.expiresIn = state.expiresIn + 5 * 60 * 1000;
    // },
    [authOperations.refreshToken.rejected](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [authOperations.googleIn.pending](state, action) {
      state.token = action.meta.arg;
      state.isLoggedIn = true;
    },
    [authOperations.googleIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.meta.arg;
    },
    [authOperations.googleIn.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
