import { Notify } from 'notiflix';
import { api } from './settings';
import notifyError from '../helpers/api/notifyError';

export const tokenToAxios = {
  set(token) {
    console.log(token);
    if (token.indexOf('"') > 0) {
      token = token.split('"')[1];
      console.log(token);
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    api.defaults.headers.common.Authorization = '';
  },
};

export async function addTransaction(body) {
  return await api
    .post('/transactions/add/', body)
    .then(({ data }) => {
      Notify.info(
        `Транзакция добавлена. Текущий баланс ${data.currentBalance}`,
      );
      return data;
    })
    .catch(error => notifyError(error));
}

export async function deleteTransaction(id) {
  const { token } = JSON.parse(localStorage.getItem('persist:auth'));
  tokenToAxios.set(token);
  return api
    .delete(`/transactions/delete/${id}`)
    .then(({ data }) => {
      Notify.info(`Транзакция удалена. Текущий баланс ${data.currentBalance}`);
      return data;
    })
    .catch(error => notifyError(error));
}

export async function getByTypeYearly(params) {
  const { type, year } = params;
  const { token } = JSON.parse(localStorage.getItem('persist:auth'));
  tokenToAxios.set(token);
  return api
    .get(`/transactions/getByType/${type}/${year}`)
    .then(({ data }) => data)
    .catch(error => notifyError(error));
}

export async function getByTypeMonthly(params) {
  const { type, year, month } = params;
  const { token } = JSON.parse(localStorage.getItem('persist:auth'));
  tokenToAxios.set(token);
  return api
    .get(`/transactions/getByType/${type}/${year}/${month}`)
    .then(({ data }) => data)
    .catch(error => error);
}

export async function getByCategoryMonthly(params) {
  const { category, year, month } = params;
  const { token } = JSON.parse(localStorage.getItem('persist:auth'));
  tokenToAxios.set(token);
  return api
    .get(`/transactions/getByCategory/${category}/${year}/${month}`)
    .then(({ data }) => data)
    .catch(error => notifyError(error));
}

export async function fetchMonthlyData(type, year, month) {
  const { token } = JSON.parse(localStorage.getItem('persist:auth'));
  tokenToAxios.set(token);
  const data = await getByTypeMonthly({ type, year, month });
  return data.transactions;
}
