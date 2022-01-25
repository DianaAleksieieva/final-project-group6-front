import css from './ExpencesAndIncomes.module.css';
import Button from '../../Button/Button';
import { useEffect, useState } from 'react';
import { parseISO, lightFormat } from 'date-fns';
import sprite from '../../../images/svg/sprite.svg';
import {
  addTransaction,
  deleteTransaction,
  fetchMonthlyData,
  getByTypeFromLastHalfYear
} from '../../../api/transactionsAPI';
import {
  ReportsMonths,
  TransactionHistory,
  TransactionInput,
  DayPicker
} from '../..';
import { authOperations, authSelectors } from '../../../redux/auth';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function ExpencesAndIncomes({
  transactionType,
  stateDashboardButton,
  changestateDashboardButton,
}) {
  const { type, category } = transactionType;
  const token = useSelector(authSelectors.getToken);

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
    if (!type || !year || !month || !token) {
      return
    }
    async function fetchData() {
      const data = await fetchMonthlyData(type, year, month);
      setMonthTransactions(data);
    }
    fetchData();
  }, [month, token, type, year]);


  useEffect(() => {
    if (!type || !token) {
      return
    }
    console.log(token);
    async function fetchYearlyData() {
      const { lastMonthsArray } = await getByTypeFromLastHalfYear(type);
      setYearTransactions(lastMonthsArray);
    }
    fetchYearlyData();
  }, [token, type]);


  useEffect(() => {
    if (!monthTransactions || monthTransactions === [] || !token) {
      return
    }
      const filerTransactions = month =>
        month.filter(
          trans =>
            lightFormat(parseISO(`${trans.date}`), 'dd.MM.yyyy') ===
            lightFormat(date, 'dd.MM.yyyy'),
        );
      setDayTransactions(filerTransactions(monthTransactions));
  }, [date, monthTransactions, token]);


  const handleSubmit = async (e) => {
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

  const clearForm = (e) => {
    setDate(initialDate);
    e.target.form.reset();
    setCategotyValue(null);
  };

  const changeDate = (date) => {
    setDate(date);
  };

  const handleDelete = async (id) => {
    const filteredTransactions = dayTransactions.filter(el => el._id !== id);
    setDayTransactions(filteredTransactions);
    dispatch(authOperations.fetchCurrentUser());
    await deleteTransaction(`${id}`);
  };

  const hideDashboard = () => {
    changestateDashboardButton(true);
  };

  const hideForm = () => {
    return stateDashboardButton === true && css.hideForm;
  };

  const hidePicker = () => {
    return stateDashboardButton === false && css.hidePicker;
  };

  return (
    <div className={css.wraper}>
      <div className={css.imgBack}>
        <div className={css.conteiner}>
          <div className={`${css.flex} ${hidePicker()}`}>
            <div className={css.box}>
              <DayPicker date={date} changeDate={changeDate} />
            </div>
          </div>
          {stateDashboardButton === false && (
            <button className={css.wrapperArrow} onClick={hideDashboard}>
              <svg width="18" height="12">
                <use href={`${sprite}#icon-arrowGoBack`}></use>
              </svg>
            </button>
          )}
          <form className={`${css.form} ${hideForm()}`} onSubmit={handleSubmit}>
            <TransactionInput
              transactionType={transactionType}
              value={categotyValue}
              onChange={v => setCategotyValue(v)}
            />
            <ul className={css.list}>
              <li className={css.item}>
                <Button
                  type="submit"
                  text={'Ввод'}
                  className={css.enterButton}
                />
              </li>
              <li>
                <Button
                  type="button"
                  text={'Очистить'}
                  onClick={clearForm}
                  className={css.clearButton}
                />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div
        className={`${css.report} ${
          stateDashboardButton === true ? css.showHistory : css.hideHistory
        }`}
      >
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
