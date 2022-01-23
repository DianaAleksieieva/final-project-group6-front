import axios from 'axios';

// const apiUrl = 'https://final-project-group6-back.herokuapp.com/api/';
const apiUrl = 'http://localhost:4321/api/';

export const api = axios.create({
  baseURL: apiUrl,
  responseType: 'json',
});

export const tokenToAxios = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
