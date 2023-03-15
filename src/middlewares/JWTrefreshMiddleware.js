import { authOperations } from '../redux/auth/';

export const jwtMiddleware = store => next => async action => {
  const state = store.getState();
  if (state.auth.isLoggedIn) {
    const { expiresIn } = state.auth;
    const now = new Date().getTime();
    if (!state.auth.refreshToken && action.type.indexOf('refresh') < 0) {
      console.log('вношу новый токен в стейт');
      await store.dispatch(authOperations.renewToken());
      return next(action);
    }
    if (
      expiresIn - now <= 2 * 60 * 1000 &&
      action.type.indexOf('refresh') < 0
    ) {
      console.log('осталось меньше 2х минут');
      console.log('делаю рефреш');
      await store.dispatch(authOperations.refreshToken());
      return next(action);
    } else {
      console.log(
        'токену осталось жить :',
        (expiresIn - now) / 1000 / 60 + 'm',
      );
    }
  }

  if (action.type === 'api/user/token/refresh/fulfilled') {
    console.dir(action);
  }
  return next(action);
};
