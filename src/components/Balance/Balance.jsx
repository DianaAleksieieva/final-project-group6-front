import css from './Balance.module.css';
import React, { useState, useEffect } from 'react';
import FirstModal from './FirstModal';
import { useSelector, useDispatch } from 'react-redux';
import StatisticButton from './StatisticButton';
import GoBackButton from './GoBackButton';
import MonthAndYearButton from '../MonthAndYearButton';
import { useLocation } from 'react-router-dom';
import { balanceOperations } from '../../redux/balance';
import { authSelectors, } from '../../redux/auth';

function Balance() {
  const [firstBalance, setFirstBalance] = useState(0);
  const [startBalance, setStartBalance] = useState(authSelectors.startBalance);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const dispatch = useDispatch();
  
  const balance = useSelector(authSelectors.getUserBalance);

  const handleChange = event => {
    setFirstBalance(event.target.value);
  };
  const putStartBalance = e => {
    e.preventDefault();
    dispatch(balanceOperations.setBalance(firstBalance));
    setStartBalance(firstBalance);
    setButtonDisabled(true);
  };

  const changeFlexContainer = () => {
    return location.pathname === '/' ? css.containerReverse : css.container;
  };

  const location = useLocation();

  return (
    <div className={changeFlexContainer()}>
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
          {startBalance === null && <FirstModal />}
          <button
            type="submit"
            className={css.confirmButton}
            onClick={putStartBalance}
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
