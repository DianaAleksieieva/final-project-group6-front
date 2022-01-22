import { createSlice } from '@reduxjs/toolkit';
import balanceOperations from './balance-operations';

const initialState = 0

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  extraReducers: {
    [balanceOperations.setBalance.fulfilled](state, action) {
      state.balance = action.payload.startBalance;
    },
  },
});

export default balanceSlice.reducer;
