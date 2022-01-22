import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateUserBalance } from '../../API/usersAPI';

axios.defaults.baseURL = 'https://final-project-group6-back.herokuapp.com/';

export const setBalance = createAsyncThunk(
  '/user/balance',
  async startBalance => {
    try {
      const { data } = await updateUserBalance({
        currentBalance: parseInt(startBalance),
      });
      return data;
    }
    catch (error) {
      console.log('Balance error')
    }
    }
);

const BalanceOperations = {
  setBalance,
};
export default BalanceOperations;
