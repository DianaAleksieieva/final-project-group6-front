import css from './Balance.module.css';
import React, { useState } from 'react';
import FirstModal from './FirstModal';
import { useSelector, useDispatch } from 'react-redux';
import StatisticButton from './StatisticButton';
import GoBackButton from './GoBackButton';
import MonthAndYearButton from '../MonthAndYearButton';
import { useLocation } from 'react-router-dom';
import { balanceOperations } from '../../redux/balance';

function Balance({ month, year, onIncrement, onDecrement }) {
  const [firstBalance, setFirstBalance] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const balance = 0
  const dispatch = useDispatch();

  const handleChange = event => {
    setFirstBalance(event.target.value);
  };
  const setStartBalance = (e) => {
    e.preventDefault()
    dispatch(balanceOperations.setBalance(firstBalance));
    // setButtonDisabled(true);
    console.log(firstBalance);
    console.log(balance);
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
            onClick={setStartBalance}
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
          <MonthAndYearButton
            month={month}
            year={year}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        )}
      </div>
    </div>
  );
}

export default Balance;
