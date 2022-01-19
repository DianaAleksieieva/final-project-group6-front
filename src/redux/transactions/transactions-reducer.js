import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
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

const items = createReducer([], {
  [fetchTransactionsSuccess]: (_, { payload }) => payload,
  [addTransactionSuccess]: (state, { payload }) => [...state, payload],
  [deleteTransactionSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const balance = createReducer(0, {
  [setBalanceSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchTransactionsRequest]: () => true,
  [fetchTransactionsSuccess]: () => false,
  [fetchTransactionsError]: () => false,
  [addTransactionRequest]: () => true,
  [addTransactionSuccess]: () => false,
  [addTransactionError]: () => false,
  [deleteTransactionRequest]: () => true,
  [deleteTransactionSuccess]: () => false,
  [deleteTransactionError]: () => false,
  [setBalanceRequest]: () => true,
  [setBalanceSuccess]: () => false,
  [setBalanceError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  balance,
  loading,
  error,
});
