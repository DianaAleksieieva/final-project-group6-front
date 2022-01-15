const getLoading = state => state.contacts.loading;

const getAllTransactions = state => state.contacts.items;

const transactionsSelectors = {
  getLoading,
  getAllTransactions,
};
export default transactionsSelectors;