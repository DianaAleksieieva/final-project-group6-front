const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsRegistered = state => state.auth.isRegistered;
const getUsername = state => state.auth.user.name;
const getUserBalance = state => state.auth.user.currentBalance;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsRegistered,
  getUserBalance,
};
export default authSelectors;
