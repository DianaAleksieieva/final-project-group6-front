import axios from 'axios';

const apiUrl = 'https://final-project-group6-back.herokuapp.com/api/';
// const apiUrl = 'http://localhost:4321/api/';

export const api = axios.create({
  baseURL: apiUrl,
  responseType: 'json',
});

export const tokenToAxios = {
  token: null,
  getToken() {
    const { token } = JSON.parse(localStorage.getItem('persist:auth'));
    if (token) {
      if (token[0] === '"') {
        this.token = token.slice(1, token.length - 1);
      } else {
        this.token = token;
      }
    }
  },
  set(inputToken) {
    if (inputToken) {
      this.token = inputToken;
    } else {
      this.getToken();
    }
    api.defaults.headers.common.Authorization = `Bearer ${this.token}`;
  },
  unset() {
    api.defaults.headers.common.Authorization = '';
  },
};
