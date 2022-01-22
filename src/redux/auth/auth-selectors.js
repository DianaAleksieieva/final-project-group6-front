const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsRegistered = state => state.auth.isRegistered;
const getUsername = state => state.auth.user.name;
const getUserBalance = state => state.auth.user.currentBalance;
const getUserName = state => state.auth.user.userName;
const avatarURL = state => state.auth.user.userName;
const getUserEmail = state => state.auth.user.email;


const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsRegistered,
  getUserBalance,
  getUserName,
  avatarURL,
  getUserEmail,
};
export default authSelectors;
