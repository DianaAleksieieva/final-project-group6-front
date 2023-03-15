import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://kapusta-project-aleksa.onrender.com';
// axios.defaults.baseURL = 'http://localhost:4321/';

const setBalance = createAsyncThunk(
  'api/user/balance',
  async (startBalance, rejectValue) => {
    try {
      const { data } = await axios.put('api/user/balance', {
        currentBalance: parseInt(startBalance),
      });
      return data;
    } catch (error) {
      alert('Can not set balance');
      return rejectValue(error);
    }
  },
);

const BalanceOperations = {
  setBalance,
};

export default BalanceOperations;
