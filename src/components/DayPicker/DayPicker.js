import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import 'react-datepicker/dist/react-datepicker.css';
import css from './DayPicker.module.css';
import { ReactComponent as Calendar } from '../../images/svg/calendar.svg';

// date - принимает текущую дату из родительского компонента
// changeDate - ссылка на функцию которая изменяет дату на выбранную.
// в родительском компоненте должно быть:
// const initialDate = new Date();
// const [date, setDate] = useState(initialDate);
// const changeDate = (date) => {
// setDate(date);
//}
const CalendarPicker = (date, changeDate) => {
  const selectDate = date => {
    changeDate(date);
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={css.datepickerButton} onClick={onClick} ref={ref}>
      <div className={css.wrapper}>
        <Calendar className={css.icon} />
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
          customInput={<CustomInput />}
        />
      </div>
    </>
  );
};

export default CalendarPicker;
