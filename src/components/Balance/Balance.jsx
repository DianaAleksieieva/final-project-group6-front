import css from './Balance.module.css';
import { transactionsSelectors } from '../../redux/transactions';
import { useSelector, useDispatch } from 'react-redux';

function Balance() {
  const balance = useSelector(transactionsSelectors.getBalance);
  return (
    <div className={css.container}>
      <p className={css.balanceText}>Баланс:</p>
      <input className={css.input} placeholder={balance + ' ' + 'UAN'}></input>
      {balance}
      <button type="submit" className={css.confirmButton}>
        ПОДТВЕРДИТЬ
      </button>
      <button type="button" className={css.toStatisticButton}>
        Перейти к отчетам
      </button>
    </div>
  );
}

export default Balance;
