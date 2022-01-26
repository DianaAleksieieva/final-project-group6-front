import sprite from '../../../images/svg/sprite.svg';
import css from './ExpencesAndIncomes.module.css';
import Button from '../../Button/Button';
import Loader from '../../Loader/Loader';
import { Notify } from 'notiflix';
import { useEffect, useState, useRef } from 'react';
import { parseISO, lightFormat } from 'date-fns';
import {
  addTransaction,
  deleteTransaction,
  fetchMonthlyData,
  getByTypeFromLastHalfYear,
} from '../../../api/transactionsAPI';
import {
  ReportsMonths,
  TransactionHistory,
  TransactionInput,
  DayPicker,
} from '../..';
import { authOperations, authSelectors } from '../../../redux/auth';
import { useDispatch, useSelector } from 'react-redux';

export default function ExpencesAndIncomes({
  transactionType,
  stateDashboardButton,
  changestateDashboardButton,
}) {
  const dispatch = useDispatch();
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
  const [submit, setSubmit] = useState(false);
  
  const formElement = useRef(null);
  const [reqStatus, setReqStatus] = useState('idle');

  // useEffect(() => {
  //   setCategotyValue(null);
  // }, [type]);

  useEffect(() => {
    if (submit && token) {
      dispatch(authOperations.fetchCurrentUser());
      setSubmit(false);
    }
  }, [dispatch, submit, token]);

  useEffect(() => {
    if (!type || !year || !month || !token) {
      return;
    }
    async function fetchData() {
      setReqStatus('pending');
      const data = await fetchMonthlyData(type, year, month);
      setMonthTransactions(data);
      setReqStatus('resolved');
    }
    fetchData();
  }, [month, token, type, year]);

  useEffect(() => {
    if (!type || !token) {
      return;
    }

    async function fetchLastHalfYearData() {
      const { lastMonthsArray } = await getByTypeFromLastHalfYear(type);
      setYearTransactions(lastMonthsArray);
    }
    fetchLastHalfYearData();
  }, [token, type]);

  useEffect(() => {
    if (!monthTransactions || monthTransactions === [] || !token) {
      return;
    }
    const filerTransactions = month =>
      month.filter(
        trans =>
          lightFormat(parseISO(`${trans.date}`), 'dd.MM.yyyy') ===
          lightFormat(date, 'dd.MM.yyyy'),
      );
    setDayTransactions(filerTransactions(monthTransactions));
  }, [date, monthTransactions, token]);

  useEffect(() => {
    if (type === 'расход') {
      return;
    }
    setCategotyValue(null);
    formElement.current.reset();
  }, [type]);

  const handleSubmit = async e => {
    e.preventDefault();

    const { description, category, amount } = e.target;
    if (!category.value) {
      Notify.failure('Выберите категорию', {
        timeout: 3000,
        clickToClose: true,
        pauseOnHover: true,
      });
      return;
    }

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
    setSubmit(true);
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
    const filteredTransactions = dayTransactions.filter(el => el._id !== id);
    setDayTransactions(filteredTransactions);
    await deleteTransaction(`${id}`);
    setSubmit(true);
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
      {/* {reqStatus === 'pending' && <Loader />} */}
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
          <form
            ref={formElement}
            className={`${css.form} ${hideForm()}`}
            onSubmit={handleSubmit}
          >
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
          status={reqStatus}
          type={type}
        />
      </div>
      <div className={css.position}>
        <ReportsMonths report={yearTransactions} />
      </div>
    </div>
  );
}
