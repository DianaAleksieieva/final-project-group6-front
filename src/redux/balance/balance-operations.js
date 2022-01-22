import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateUserBalance, getCurrentUser } from '../../API/usersAPI';

axios.defaults.baseURL = 'https://final-project-group6-back.herokuapp.com/';

export const setBalance = createAsyncThunk(
  '/user/balance',
  async startBalance => {
    const data = await updateUserBalance({currentBalance: parseInt(startBalance) });
    console.log(startBalance);
    return data;
  })

export const getBalance = createAsyncThunk(
  '/user/current',
  async function fetchBalance() {
    const data = await getCurrentUser();
    console.log(data)
    return data
  },
);


const BalanceOperations = {
  setBalance,
  getBalance,
};
export default BalanceOperations;
