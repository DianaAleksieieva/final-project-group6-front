import css from './Balance.module.css';
import React, { useState, useEffect } from 'react';
import FirstModal from './FirstModal';
import { useSelector, useDispatch } from 'react-redux';
import StatisticButton from './StatisticButton';
import GoBackButton from './GoBackButton';
import MonthAndYearButton from '../MonthAndYearButton';
import { useLocation } from 'react-router-dom';
import { balanceOperations } from '../../redux/balance';
import { authSelectors, authOperations } from '../../redux/auth';

function Balance({ month, year, onIncrement, onDecrement }) {
  const [handledBalance, setHandleBalance] = useState(0);
  const [startBalance, setStartBalance] = useState(null);
  const dispatch = useDispatch();

  const balance = useSelector(authSelectors.getUserBalance);
  const userStartBalance = useSelector(authSelectors.getStartBalance);


  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch, userStartBalance, balance]);
  
  useEffect(() => {
    setStartBalance(userStartBalance);
    }, [userStartBalance]);

  const handleChange = event => {
    setHandleBalance(event.target.value);
  };
  const putStartBalance = e => {
    e.preventDefault();
    dispatch(balanceOperations.setBalance(handledBalance));
    setStartBalance(handledBalance);
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
            disabled={startBalance !== null && 'disabled'}
            onChange={handleChange}
          ></input>
          <span className={css.UA}> UAH</span>
          {startBalance === null && <FirstModal />}
          {startBalance !== null ? (
            <button
              type="submit"
              className={css.disabledButton}
              disabled="disabled"
            >
              ПОДТВЕРДИТЬ
            </button>
          ) : (
            <button
              type="submit"
              className={css.confirmButton}
              onClick={putStartBalance}
            >
              ПОДТВЕРДИТЬ
            </button>
          )}
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
