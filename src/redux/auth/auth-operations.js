import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://final-project-group6-back.herokuapp.com/';
// axios.defaults.baseURL = 'http://localhost:4321/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'api/auth/register',
  async (credentials, rejectValue) => {
    try {
      const { data } = await axios.post('api/auth/register', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      alert('The user with this email is already registered');
      return rejectValue(error);
    }
  },
);

const logIn = createAsyncThunk(
  'api/auth/login',
  async (credentials, rejectValue) => {
    try {
      const { data } = await axios.post('api/auth/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      alert('Wrong Password');
      return rejectValue(error);
    }
  },
);

const logOut = createAsyncThunk('api/auth/logout', async (_, rejectValue) => {
  try {
    await axios.post('api/auth/logout');
    token.unset();
  } catch (error) {
    return rejectValue(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'api/auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('api/auth/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
