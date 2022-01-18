import React from 'react';
import { ReactComponent as ArrowLeft } from '../../images/svg/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../images/svg/ArrowRight.svg';
import css from './MonthAndYearButton.module.css';
import { Month } from '../../constans/index';

const Controls = ({ month, year, onIncrement, onDecrement }) => {
  return (
    <div>
      <div className={css.container}>
        <p className={css.title}>Текущий период:</p>
        <div className={css.wrapper_buttons}>
          <button
            className={css.button}
            onClick={month => {
              onDecrement(month);
            }}
          >
            <ArrowLeft />
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
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
