import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import css from './DayPicker.module.css';
import sprite from '../../images/svg/sprite.svg';

const CalendarPicker = ({ date, changeDate }) => {
  const selectDate = date => {
    changeDate(date);
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={css.datepickerButton} onClick={onClick} ref={ref}>
      <div className={css.wrapper}>
        <svg width="20" height="20" className={css.icon}>
          <use href={`${sprite}#icon-calendar`}></use>
        </svg>
        {value}
      </div>
    </button>
  ));

  return (
    <>
      <div>
        <DatePicker
          locale={ru}
          selected={date}
          onChange={date => selectDate(date)}
          dateFormat="dd.MM.yyyy"
          todayButton="Сегодня"
          maxDate={new Date()}
          customInput={<CustomInput />}
        />
      </div>
    </>
  );
};

export default CalendarPicker;
