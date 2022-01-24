import { logout } from '../api/authAPI';
import { refreshToken } from '../api/usersAPI';
import { authOperations } from '../redux/auth/';

export const jwtMiddleware = store => next => async action => {
  const state = store.getState();
  console.log(state);
  if (state.auth.isLoggedIn) {
    const { expiresIn } = state.auth;
    const now = new Date().getTime();
    console.log(action.type);
    if (expiresIn - now <= 2 * 60 * 1000) {
      console.log('осталось меньше 2х минут');
      if (action.type.indexOf('refresh') < 0) {
        store.dispatch(authOperations.refreshToken());
        return;
      }
    }
  }
  return next(action);
};
