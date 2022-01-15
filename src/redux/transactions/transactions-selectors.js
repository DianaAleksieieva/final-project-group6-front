const getLoading = state => state.transactions.loading;

const getAllTransactions = state => state.transactions.items;

const getBalance = state => state.transactions.balance;

const transactionsSelectors = {
  getLoading,
  getAllTransactions,
  getBalance,
};
export default transactionsSelectors;