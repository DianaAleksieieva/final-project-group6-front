const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsRegistered = state => state.auth.isRegistered;
const getUsername = state => state.auth.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsRegistered,
};
export default authSelectors;
