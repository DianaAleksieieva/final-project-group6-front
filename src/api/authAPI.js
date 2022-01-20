import { Notify } from 'notiflix';
import { api, tokenToAxios } from './settings';
import notifyError from '../helpers/api/notifyError';

export async function register(body) {
  return await api
    .post('/auth/register', body)
    .then(({ token, user }) => {
      tokenToAxios.set(token);
      Notify.success(`Пользователь ${user.userName} зарегистрирован`);
      return { token, user };
    })
    .catch(error => notifyError(error));
}

export async function login(body) {
  return await api
    .post('/auth/login', body)
    .then(({ token, user, refreshToken }) => {
      tokenToAxios.set(token);
      Notify.success(`Приветствую ${user.userName}! Вы вошли.`);
      return { token, user, refreshToken };
    })
    .catch(error => notifyError(error));
}

export async function logout() {
  return await api
    .post('/auth/logout')
    .then(__ => {
      Notify.success(`До скорой встречи!`);
      tokenToAxios.unset();
      return true;
    })
    .catch(error => notifyError(error));
}
