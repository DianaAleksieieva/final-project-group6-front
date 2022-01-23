import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import notifyError from '../../helpers/api/notifyError';

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
      Notify.success(
        `Пользователь с email ${data.user.email} успешно зарегистрирован`,
      );
      return data;
    } catch (error) {
      notifyError(error);
      // alert('The user with this email is already registered');
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
      Notify.success(`Добро пожаловать ${data.user.email}`);
      return data;
    } catch (error) {
      notifyError(error);
      // alert('Wrong Password');
      return rejectValue(error);
    }
  },
);

const logOut = createAsyncThunk('api/auth/logout', async (_, rejectValue) => {
  try {
    await axios.post('api/auth/logout');
    token.unset();
    Notify.success(`Вы успешно разлогинились!`);
  } catch (error) {
    notifyError(error);
    return rejectValue(error);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'api/user/token/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    const persistedRefreshToken = state.auth.refreshToken;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('api/user/current');
      return data;
    } catch (error) {
      if ((error.message = 'jwt expired'))
        return refreshHelper(persistedRefreshToken);
      return thunkAPI.rejectWithValue();
    }
  },
);

const googleIn = createAsyncThunk(
  'api/auth/googleIn',
  async (token, thunkAPI) => {
    if (token === null) {
      return thunkAPI.rejectWithValue('Token neded');
    }
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      const { data } = await axios.get('/api/user/current');
      Notify.success(`Добро пожаловать ${data.user.email}`);
      return data;
    } catch (error) {
      notifyError(error);
      return thunkAPI.rejectWithValue();
    }
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
  googleIn,
};
export default operations;
