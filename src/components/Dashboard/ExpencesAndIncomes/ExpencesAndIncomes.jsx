import css from './ExpencesAndIncomes.module.css';
import Button from '../../Button/Button';
import { useEffect, useState } from 'react';
import { parseISO, lightFormat } from 'date-fns';
import {
    addTransaction,
    deleteTransaction,
    fetchMonthlyData,
    getByTypeYearly
  } from '../../../api/transactionsAPI';
import {
    ReportsMonths,
    TransactionHistory,
    TransactionInput,
    DayPicker,
} from '../..';
import { authOperations } from '../../../redux/auth';
import { useDispatch } from 'react-redux';

export default function ExpencesAndIncomes({ transactionType }) {
  const { type, category } = transactionType;

  const initialDate = new Date();
  const [date, setDate] = useState(initialDate);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const [yearTransactions, setYearTransactions] = useState([]);
  const [monthTransactions, setMonthTransactions] = useState([]);
  const [dayTransactions, setDayTransactions] = useState([]);
  const [categotyValue, setCategotyValue] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const data = await fetchMonthlyData(type, year, month);
      setMonthTransactions(data);
    }
    fetchData();
  }, [month, type, year]);


  useEffect(() => {
    async function fetchYearlyData() {
      const data = await getByTypeYearly({ type, year });
      setYearTransactions(data.result);
    }
    fetchYearlyData();
  }, [type, year]);

  useEffect(() => {
    if (monthTransactions && monthTransactions !== []) {
      const filerTransactions = month =>
        month.filter(
          trans =>
            lightFormat(parseISO(`${trans.date}`), 'dd.MM.yyyy') ===
            lightFormat(date, 'dd.MM.yyyy'),
        );
      setDayTransactions(filerTransactions(monthTransactions));
    }
  }, [date, monthTransactions]);


  const handleSubmit = async e => {
    e.preventDefault();
    const { description, category, amount } = e.target;
    const stringifyDate = JSON.parse(JSON.stringify(date));
    const newTransaction = {
      type,
      category: category.value,
      date: stringifyDate,
      amount: Number(amount.value),
      description: description.value,
    };

    await addTransaction(newTransaction);
    e.target.reset();
    setCategotyValue(null);

    const data = await fetchMonthlyData(type, year, month);
    setMonthTransactions(data);
    dispatch(authOperations.fetchCurrentUser());
  };

  const clearForm = e => {
    setDate(initialDate);
    e.target.form.reset();
    setCategotyValue(null);
  };

  const changeDate = date => {
    setDate(date);
  };


  const handleDelete = async id => { 
    const filteredTransactions = dayTransactions.filter(
      el => el._id !== id
    )
    setDayTransactions(filteredTransactions)

    await deleteTransaction(`${id}`)
  }


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
            <TransactionInput transactionType={transactionType} value={categotyValue} onChange={v => setCategotyValue(v)}/>
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
        <TransactionHistory
          handleDelete={handleDelete}
          data={dayTransactions}
          category={category}
          type={type}
        />
      </div>
      <div className={css.position}>
        <ReportsMonths report={yearTransactions} />
      </div>
    </div>
  );
}
