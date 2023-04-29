import axios from 'axios';

const apiUrl = 'https://kapusta-project-aleksa.onrender.com/api/';
// const apiUrl = 'http://localhost:4321/api/';

export const api = axios.create({
  baseURL: apiUrl,
  responseType: 'json',
});

export const tokenToAxios = {
  token: null,
  getToken() {
    const item = localStorage.getItem('persist:auth')
    if (!item) {
      this.token = null
    } else {
      const { token } = JSON.parse(item);
      if (token) {
        if (token[0] === '"') {
          this.token = token.slice(1, token.length - 1);
        } else {
          this.token = token;
        }
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
