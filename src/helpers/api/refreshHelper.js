import { api, tokenToAxios } from '../../api/settings';

const refreshHelper = (refreshToken, callback, credentials, rejectValue) => {
  // tokenToAxios.set(refreshToken);
  // const response = await api
  // .get(`/user/token/refresh`)
  // .then(({ token, user, refreshToken }) => ( { token, user, refreshToken }))
  // .catch(error =>{
  //     notifyError(error);
  //     return rejectValue(error);
  // })
  // tokenToAxios.set(response.token);
};

export default refreshHelper;
