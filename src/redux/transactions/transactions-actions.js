import { createAction } from '@reduxjs/toolkit';

export const fetchTransactionsRequest = createAction(
  'transactions/fetchTransactionsRequest',
);
export const fetchTransactionsSuccess = createAction(
  'transactions/fetchTransactionsSuccess',
);
export const fetchTransactionsError = createAction(
  'transactions/fetchTransactionsError',
);

export const addTransactionRequest = createAction(
  'transactions/addTransactionRequest',
);
export const addTransactionSuccess = createAction(
  'transactions/addTransactionSuccess',
);
export const addTransactionError = createAction(
  'transactions/addTransactionError',
);

export const deleteTransactionRequest = createAction(
  'transactions/TransactionRequest',
);
export const deleteTransactionSuccess = createAction(
  'transactions/TransactionSuccess',
);
export const deleteTransactionError = createAction(
  'transactions/TransactionError',
);

export const setBalanceRequest = createAction('transactions/setBalanceRequest');
export const setBalanceSuccess = createAction('transactions/setBalanceSuccess');
export const setBalanceError = createAction('transactions/setBalanceError');
