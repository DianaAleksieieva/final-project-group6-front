import { Notify } from 'notiflix';
import { api } from './settings';
import notifyError from '../helpers/api/notifyError';

const tokenToAxios = {
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
  set() {
    this.getToken();
    api.defaults.headers.common.Authorization = `Bearer ${this.token}`;
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
  tokenToAxios.set();
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
  tokenToAxios.set();
  return api
    .get(`/transactions/getByType/${type}/${year}`)
    .then(({ data }) => data)
    .catch(error => notifyError(error));
}

export async function getByTypeFromLastHalfYear(type) {
  return api
    .get(`/transactions/getLastHalfYearByType/${type}`)
    .then(({ data }) => data)
    .catch(error => notifyError(error));
}

export async function getByTypeMonthly(params) {
  const { type, year, month } = params;
  tokenToAxios.set();
  return api
    .get(`/transactions/getByType/${type}/${year}/${month}`)
    .then(({ data }) => data)
    .catch(error => error);
}

export async function getByCategoryMonthly(params) {
  const { category, year, month } = params;
  tokenToAxios.set();
  return api
    .get(`/transactions/getByCategory/${category}/${year}/${month}`)
    .then(({ data }) => data)
    .catch(error => notifyError(error));
}

export async function fetchMonthlyData(type, year, month) {
  tokenToAxios.set();
  const data = await getByTypeMonthly({ type, year, month });
  return data.transactions;
}
