const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsRegistered = state => state.auth.isRegistered;
const getUsername = state => state.auth.user.name;
const getUserBalance = state => state.auth.user.currentBalance;
const getUserName = state => state.auth.user.userName;
const avatarURL = state => state.auth.user.avatarURL;
const getUserEmail = state => state.auth.user.email;
const getStartBalance = state => state.auth.user.startBalance;


const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsRegistered,
  getUserBalance,
  getUserName,
  avatarURL,
  getUserEmail,
  getStartBalance,
};
export default authSelectors;
