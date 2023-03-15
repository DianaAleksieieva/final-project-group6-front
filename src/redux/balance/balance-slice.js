import { createSlice } from '@reduxjs/toolkit';
import balanceOperations from './balance-operations';

const initialState = {balance:0}

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  extraReducers: {
    [balanceOperations.setBalance.fulfilled](state, action) {
      state.balance = action.payload.currentBalance;
    },
  }
});

export default balanceSlice.reducer;
