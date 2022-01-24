import axios from 'axios';

// const apiUrl = 'https://final-project-group6-back.herokuapp.com/api/';
const apiUrl = 'http://localhost:4325/api/';

export const api = axios.create({
  baseURL: apiUrl,
  responseType: 'json',
});

export const tokenToAxios = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  get() {
    const { authorization = '' } = axios.defaults.headers.common.Authorization;
    const [bearer, token] = authorization.split(' ');
    return token;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
