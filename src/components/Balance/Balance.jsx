import css from './Balance.module.css';
import { transactionsSelectors } from '../../redux/transactions';
import { useSelector, useDispatch } from 'react-redux';

function Balance() {
  const balance = useSelector(transactionsSelectors.getBalance);
  return (
    <div className={css.container}>
      <p className={css.balanceText}>Баланс:</p>
      <input></input>
      {balance}
      UAN
      <button>ПОДТВЕРДИТЬ</button>
      <button>Перейти к отчетам</button>
    </div>
  );
}

export default Balance;
