import React from 'react';
import sprite from '../../images/svg/sprite.svg';
import css from './MonthAndYearButton.module.css';
import { Month } from '../../constans/index';

function MonthAndYearButton({ month, year, onIncrement, onDecrement }) {
  const currentDate = new Date();

  const increment = () => {
    if (
      currentDate.getMonth() + 1 === month &&
      currentDate.getFullYear() === year
    ) {
      return;
    }
    onIncrement(month, year);
  };

  const decrement = () => {
    onDecrement(month, year);
  };

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <p className={css.title}>Текущий период:</p>
        <div className={css.wrapper_buttons}>
          <button className={css.button} onClick={decrement}>
            <svg width="12" height="12">
              <use href={`${sprite}#icon-arrowLeft`}></use>
            </svg>
          </button>
          <p className={css.text}>
            {Month[month]} {year}
          </p>
          <button className={css.button} onClick={increment}>
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
