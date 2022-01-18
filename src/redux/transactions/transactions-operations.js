import axios from 'axios';
import {
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  deleteTransactionRequest,
  deleteTransactionSuccess,
  deleteTransactionError,
  fetchTransactionsRequest,
  fetchTransactionsSuccess,
  fetchTransactionsError,
  setBalanceRequest,
  setBalanceSuccess,
  setBalanceError,
} from './transactions-actions';

const fetchTransactions = () => async dispatch => {
  dispatch(fetchTransactionsRequest());
  try {
    const { data } = await axios.get('/transactions');
    dispatch(fetchTransactionsSuccess(data));
  } catch (error) {
    dispatch(fetchTransactionsError(error.message));
  }
};

const addTransaction = transaction => dispatch => {
  dispatch(addTransactionRequest());
  axios
    .post('/transactions', transaction)
    .then(({ data }) => dispatch(addTransactionSuccess(data)))
    .catch(error => dispatch(addTransactionError(error.message)));
};

const deleteTransaction = transactionId => dispatch => {
  dispatch(deleteTransactionRequest());
  axios
    .delete(`/transactions/${transactionId}`)
    .then(() => dispatch(deleteTransactionSuccess(transactionId)))
    .catch(error => dispatch(deleteTransactionError(error.message)));
};
const setBalance = () => dispatch => {
  dispatch(setBalanceRequest());
  axios
    .put(
      `https://final-project-group6-back.herokuapp.com/api/transactions/balance`,
    )
    .then(() => dispatch(setBalanceSuccess()))
    .catch(error => dispatch(setBalanceError(error.message)));
};

const transactionsOperations = {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  setBalance,
};
export default transactionsOperations;
