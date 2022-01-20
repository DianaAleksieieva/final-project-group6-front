import css from './ExpencesAndIncomes.module.css';
import Button from '../../Button/Button';
import { useState } from 'react';
import {
  ReportsMonths, TransactionHistory, TransactionInput, DayPicker
} from '../..';

export default function ExpencesAndIncomes({ transactionType }) {  

  const writePrice = e => {
    e.preventDefault();
    // onSubmit(() => console.log('gogogo'));
    clearForm();
  };

  const clearForm = (e) => {
    setDate(initialDate);
    e.target.form.reset()
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
              <TransactionInput transactionType={transactionType} />
            </div>

            <ul className={css.list}>
              <li className={css.item}>
                <Button
                  type="submit"
                  text={'Ввод'}
                  onSubmit={writePrice}
                  style={{ backgroundColor: '#ff751d', color: 'white' }}
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
