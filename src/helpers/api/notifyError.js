import { Notify } from 'notiflix';
import translateError from './errorTranslater';

function notifyError(error) {
  const message = translateError(error.message);
  Notify.failure(message, {
    timeout: 3000,
    clickToClose: true,
    pauseOnHover: true,
  });
  throw new Error(message);
}
export default notifyError;
