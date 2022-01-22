import css from './ExpencesAndIncomes.module.css';
import Button from '../../Button/Button';
import { useEffect, useState } from 'react';
import { parseISO, lightFormat } from 'date-fns';
import {
  getByTypeMonthly,
  getByTypeYearly,
} from '../../../api/transactionsAPI';
import {
  ReportsMonths,
  TransactionHistory,
  TransactionInput,
  DayPicker,
} from '../..';

export default function ExpencesAndIncomes({ transactionType, active }) {
  const initialDate = new Date();
  const { type } = transactionType;
  const [date, setDate] = useState(initialDate);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const [transaction, setTransaction] = useState({
    date: null,
    description: null,
    category: null,
    amount: null,
  });
  const [yearTransactions, setYearTransactions] = useState([]);
  const [monthTransactions, setMonthTransactions] = useState([]);
  const [dayTransactions, setDayTransactions] = useState([]);

  // console.log(monthTransactions);
  // console.log(parseISO(`${monthTransactions[0].date}`));
  // console.log(JSON.stringify(initialDate));
  // console.log(lightFormat(initialDate, 'dd.MM.yyyy'));

  useEffect(() => {
    async function fetchData() {
      const data = await getByTypeMonthly({ type, year, month });
      setMonthTransactions(data.transactions);
    }
    fetchData();
  }, [month, type, year]);

  useEffect(() => {
    async function fetchData() {
      const data = await getByTypeYearly({ type, year });
      setYearTransactions(data.result);
    }
    fetchData();
  }, [type, year]);

  // const filerTransactions = (month) => {
  //   return month.filter(trans =>
  //     lightFormat(parseISO(`${trans.date}`), 'dd.MM.yyyy') === lightFormat(date, 'dd.MM.yyyy')
  //   )
  // }

  useEffect(() => {
    if (monthTransactions !== []) {
      const filerTransactions = month =>
        month.filter(
          trans =>
            lightFormat(parseISO(`${trans.date}`), 'dd.MM.yyyy') ===
            lightFormat(date, 'dd.MM.yyyy'),
        );
      setDayTransactions(filerTransactions(monthTransactions));
    }
  }, [date, monthTransactions]);

  const handleSubmit = e => {
    e.preventDefault();
    const { description, category, amount } = e.target;
    const newTransaction = {
      date: JSON.stringify(date),
      description: description.value,
      category: category.value,
      amount: `${amount.value} грн`,
    };

    setTransaction(newTransaction);
    e.target.reset();
  };

  const clearForm = e => {
    setDate(initialDate);
    e.target.form.reset();
  };

  const changeDate = date => {
    setDate(date);
  };

  return (
    <div className={css.wraper}>
      <div className={css.imgBack}>
        <div className={css.conteiner}>
          <div className={css.flex}>
            <div className={css.box}>
              <DayPicker date={date} changeDate={changeDate} />
            </div>
          </div>

          <form className={css.form} onSubmit={handleSubmit}>
            <TransactionInput transactionType={transactionType} />

            <ul className={css.list}>
              <li className={css.item}>
                <Button
                  type="submit"
                  text={'Ввод'}
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
        <TransactionHistory transactions={dayTransactions} />
      </div>
      <div className={css.position}>
        <ReportsMonths report={yearTransactions} />
      </div>
    </div>
  );
}
