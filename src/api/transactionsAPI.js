import { Notify } from 'notiflix';
import { api } from './settings';
import notifyError from '../helpers/api/notifyError';

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
  return api
    .delete(`/transactions/delete/${id}`)
    .then(({ data }) => {
      Notify.info(`Транзакция удалена. Текущий баланс ${data.currentBalance}`);
      return data;
    })
    .catch(error => notifyError(error));
}

// export async function getByTypeYearly(params) {
//   const { type, year } = params;
//   return api
//     .get(`/transactions/getByType/${type}/${year}`)
//     .then(({ data }) => data)
//     .catch(error => notifyError(error));
// }

export async function getByTypeFromLastHalfYear(type) {
  return api
    .get(`/transactions/getLastHalfYearByType/${type}`)
    .then(({ data }) => data)
    .catch(error => notifyError(error));
}

export async function getByTypeMonthly(params) {
  const { type, year, month } = params;
  return api
    .get(`/transactions/getByType/${type}/${year}/${month}`)
    .then(({ data }) => data)
    .catch(error => error);
}

export async function getByCategoryMonthly(params) {
  const { category, year, month } = params;
  return api
    .get(`/transactions/getByCategory/${category}/${year}/${month}`)
    .then(({ data }) => data)
    .catch(error => notifyError(error));
}

export  async function fetchMonthlyData(type, year, month) {
  const data = await getByTypeMonthly({ type, year, month })
  return data.transactions
}
