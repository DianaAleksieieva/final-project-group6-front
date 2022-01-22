import { Notify } from 'notiflix';
import { api, tokenToAxios } from './settings';
import notifyError from '../helpers/api/notifyError';

export async function getCurrentUser() {
  return await api
    .get('/user/current')
    .then(({ data }) => ({ user: data }))
    .catch(error => notifyError(error));
}

export async function patchUserAvatar(body) {
  return await api
    .patch('/user/avatar', body)
    .then(({ data }) => {
      Notify.info(`Аватар изменен`);
      return data.avatarUrl;
    })
    .catch(error => notifyError(error));
}

export async function updateUserBalance(body) {
  console.log(body)
  api
    .put('/user/balance/', body)
    .then(({ data }) => {
      Notify.success(`Текущий баланс ${data.currentBalance}`);
      return true;
    })
    .catch(error => notifyError(error));
}

export async function refreshToken(params) {
  const { refreshToken } = params;
  tokenToAxios.set(refreshToken);
  return await api
    .get(`/user/token/refresh`)
    .then(({ token, user, refreshToken }) => {
      tokenToAxios.set(token);
      return { token, user, refreshToken };
    })
    .catch(error => notifyError(error));
}
