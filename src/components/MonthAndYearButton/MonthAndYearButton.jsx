import { React, useState } from 'react';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import Controls from './Controls';

function MonthAndYearButton() {
  //   const date = new Date();
  //   let [currentMonth, currentYear] = format(date, 'M.yyyy').split('.');
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2022);

  console.log(month, year);
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
      <Controls
        month={month}
        year={year}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </div>
  );
}

export default MonthAndYearButton;
