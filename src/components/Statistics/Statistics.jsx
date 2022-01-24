import { React, useState, useEffect } from 'react';
import css from './Statistics.module.css';
import ButtonChangeCategories from './ButtonChangeCategories/ButtonChangeCategories';
import StatisticsCategoies from './StatisticsCategories/StatisticCategories';
import { EXPENCES, INCOMES } from '../../constans';
import Charts from '../Charts/Charts';
import { ReactComponent as Img } from '../../images/svg/dollar.svg';

export default function Statistics({ month, year }) {
  const [active, setActive] = useState('Расход');
  const [transactionType, setTransactionType] = useState(EXPENCES);
  const [category, setCategory] = useState('');

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
      setCategory('');
    } else if (active === 'Расход') {
      setActive('Доход');
      setCategory('');
    }
  };

  const changeCategory = (categoryToChange = '') => {
    setCategory(categoryToChange);
  };

  function categoryIsEmpty() {
    return category === '';
  }

  return (
    <>
      <div className={css.containerButton}>
        <ButtonChangeCategories
          active={active}
          changeStatus={changeStatus}
        />
        <StatisticsCategoies
          month={month}
          year={year}
          transactionType={transactionType}
          changeCategory={changeCategory}
        />
      </div>
      <div className={css.containerGraph}>
        {
          categoryIsEmpty() && (
            <div>
              <Img height={100} width={100} />
              <h2>Для отображения графиков - пополните баланс на 100$</h2>
              <h3>Шутка!Просто выберите категорию выше</h3>
            </div>
          )

        }
        {
          !categoryIsEmpty() &&
          <Charts category={category} month={month} year={year} />
        }
      </div>
    </>
  );
}
