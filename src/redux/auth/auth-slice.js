import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null, balance: null },

  token: null,
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
      state.isLoggedIn = true;
      state.isRegistered = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
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
