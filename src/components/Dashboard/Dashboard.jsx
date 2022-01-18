import css from './Dashboard.module.css';
import DayPicker from '../DayPicker/index';
import React, { useState } from 'react';
import Button from '../Button/Button';
import TransactionInput from '../TransactionInput/index';
import { ReportsMonths, TransactionHistory } from '..';

function Dashboard({ onSubmit, type }) {
  const writePrice = e => {
    e.preventDefault();
    onSubmit(() => console.log('gogogo'));
    clearForm();
  };

  const clearForm = () => {
    setDate(initialDate);
  };

  const initialDate = new Date();
  const [date, setDate] = useState(initialDate);
  const changeDate = date => {
    setDate(date);
  };

  return (
    <div className={css.wraper}>
      <div className={css.imgBack}>
        <div className={css.conteiner}>
          <form className={css.form} onSubmit={writePrice}>
            <div className={css.flex}>
              <div className={css.box}>
                <DayPicker date={date} changeDate={changeDate} />
              </div>
              <TransactionInput />
            </div>
            <ul className={css.list}>
              <li className={css.item}>
                <Button
                  type="submit"
                  text={'Ввод'}
                  onSubmit={writePrice}
                  active={{ backgroundColor: '#ff751d', color: 'white' }}
                />
              </li>
              <li>
                <Button type="button" text={'Очистить'} onClick={clearForm} />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className={css.report}>
        <TransactionHistory />
      </div>
      <div className={css.position}>
        <ReportsMonths />
      </div>
    </div>
  );
}

export default Dashboard;
