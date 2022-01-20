import css from './Balance.module.css';
import React, { useState } from 'react';
import FirstModal from './FirstModal';
import { transactionsSelectors } from '../../redux/transactions';
import { transactionsOperations } from '../../redux/transactions';
import { useSelector, useDispatch } from 'react-redux';
import StatisticButton from './StatisticButton';
import GoBackButton from './GoBackButton';
import MonthAndYearButton from '../MonthAndYearButton';
import { useLocation } from 'react-router-dom';

function Balance() {
  const [firstBalance, setFirstBalance] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const balance = useSelector(transactionsSelectors.getBalance);
  const dispatch = useDispatch();

  const handleChange = event => {
    setFirstBalance(event.target.value);
  };
  const setBalance = () => {
    dispatch(transactionsOperations.setBalance(firstBalance));
    console.log(firstBalance);
    console.log(balance);
    setButtonDisabled(true);
  };
  const location = useLocation();

  return (
    <div className={css.container}>
      <div className={css.contArrow}>
        {location.pathname === '/statistics' && <GoBackButton />}
      </div>

      <form className={css.balanceWrap}>
        <p className={css.balanceText}>Баланс:</p>
        <div className={css.wrapperButton}>
          <input
            className={css.input}
            placeholder={balance ? balance : '0'}
            onChange={handleChange}
          ></input>
          <span className={css.UA}> UAH</span>
          {balance === null && <FirstModal />}
          <button
            type="submit"
            className={css.confirmButton}
            onClick={setBalance}
            disabled={buttonDisabled}
          >
            ПОДТВЕРДИТЬ
          </button>
        </div>
      </form>
      <div className={css.contStats}>
        {location.pathname === '/' ? (
          <StatisticButton />
        ) : (
          <MonthAndYearButton />
        )}
      </div>
    </div>
  );
}

export default Balance;
