import { Notify } from 'notiflix';
import translateError from './errorTranslater';

function notifyError(error) {
  const message = translateError(error.message);
  Notify.failure(message);
  throw new Error(message);
}
export default notifyError;
