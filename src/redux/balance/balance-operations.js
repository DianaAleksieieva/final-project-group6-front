import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateUserBalance, getCurrentUser } from '../../API/usersAPI';

axios.defaults.baseURL = 'https://final-project-group6-back.herokuapp.com/';

export const setBalance = createAsyncThunk(
  '/user/balance',
  async startBalance => {
    const data = await updateUserBalance(startBalance);
    return data;
  },
);

const BalanceOperations = {
  setBalance,
};
export default BalanceOperations;
