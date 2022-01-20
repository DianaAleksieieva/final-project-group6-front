import { React, useState } from 'react';
import sprite from '../../images/svg/sprite.svg';
import css from './MonthAndYearButton.module.css';
import { Month } from '../../constans/index';

function MonthAndYearButton() {
  //   const date = new Date();
  //   let [currentMonth, currentYear] = format(date, 'M.yyyy').split('.');
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2022);

  const onIncrement = () => {
    if (month < 12) {
      setMonth(month + 1);
    }
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    }
  };

  const onDecrement = () => {
    if (month > 1) {
      setMonth(month - 1);
    }
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    }
  };

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <p className={css.title}>Текущий период:</p>
        <div className={css.wrapper_buttons}>
          <button
            className={css.button}
            onClick={month => {
              onDecrement(month);
            }}
          >
            <svg width="12" height="12">
              <use href={`${sprite}#icon-arrowLeft`}></use>
            </svg>
          </button>
          <p className={css.text}>
            {Month[month]} {year}
          </p>
          <button
            className={css.button}
            onClick={month => {
              onIncrement(month);
            }}
          >
            <svg width="12" height="12">
              <use href={`${sprite}#icon-arrowRight`}></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MonthAndYearButton;
