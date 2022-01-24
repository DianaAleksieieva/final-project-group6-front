import { React, useState, useEffect } from 'react';
import css from './Statistics.module.css';
import ButtonChangeCategories from './ButtonChangeCategories';
import StatisticsCategoies from './StatisticsCategories/StatisticCategories';
import { EXPENCES, INCOMES } from '../../constans';
import Charts from '../Charts/Charts';

export default function Statistics({ month, year }) {
  const [active, setActive] = useState('Расход');
  const [transactionType, setTransactionType] = useState(EXPENCES);
  const [category, setCategory] = useState(''); // ЭТА ПЕРЕМЕННАЯ ДЛЯ ГРАФИКОВ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  useEffect(() => {
    if (active === 'Доход') {
      setTransactionType(INCOMES);
    } else if (active === 'Расход') {
      setTransactionType(EXPENCES);
    }
  }, [active]);

  const changeStatus = () => {
    if (active === 'Доход') {
      setActive('Расход');
    } else if (active === 'Расход') {
      setActive('Доход');
    }
  };

  const changeCategory = (categoryToChange = '') => {
    setCategory(categoryToChange);
  };

  return (
    <>
      <div className={css.containerButton}>
        <ButtonChangeCategories active={active} changeStatus={changeStatus} />
        <StatisticsCategoies
          month={month}
          year={year}
          transactionType={transactionType}
          changeCategory={changeCategory}
        />
      </div>
      <div className={css.containerGraph}>
        <Charts category={category} month={month} year={year} />
      </div>
    </>
  );
}
