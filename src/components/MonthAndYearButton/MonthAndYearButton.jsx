import { React, useState } from 'react';
import { format } from 'date-fns';
import { ReactComponent as ArrowLeft } from '../../images/svg/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../images/svg/ArrowRight.svg';
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
}

export default MonthAndYearButton;
