import css from './Balance.module.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FirstModal from './FirstModal';
import { transactionsSelectors } from '../../redux/transactions';
import { transactionsOperations } from '../../redux/transactions';
import { useSelector, useDispatch } from 'react-redux';

function Balance() {
  const [firstBalance, setFirstBalance] = useState(0);
  const balance = useSelector(transactionsSelectors.getBalance);
  const dispatch = useDispatch();

  const handleChange = event => {
    setFirstBalance(event.target.value);
  };
  const setBalance = () => {
    dispatch(transactionsOperations.setBalance(firstBalance));
    console.log(firstBalance);
    console.log(balance)
  }
  
  return (
    <div className={css.container}>
      <div className={css.balanceWrap}>
        <p className={css.balanceText}>Баланс:</p>
        <input
          className={css.input}
          placeholder={balance ? balance + ' ' + 'UAN' : 0 + ' ' + 'UAN'}
          onChange={handleChange}
        ></input>
        {balance === null && <FirstModal />}
        {/* {transactions.length === 0 && <FirstModal/>} */}
        <button
          type="submit"
          className={css.confirmButton}
          onClick={setBalance}
        >
          ПОДТВЕРДИТЬ
        </button>
      </div>
      <Link className={css.toStatisticButton} to="/statistics">
        Перейти к отчетам
      </Link>
    </div>
  );
}

export default Balance;
