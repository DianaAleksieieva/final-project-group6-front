import css from './CostsAndIncome.module.css';
import { ReactComponent as Band } from '../../images/svg/band.svg';
import { getByTypeMonthly } from '../../API/transactionsAPI';
import { React, useState, useEffect } from 'react';

const CostsAndIncome = ({ month, year }) => {
  const [income, setIncome] = useState({});
  const [expense, setExpense] = useState({});

  useEffect(() => {
    let type = 'income';
    getByTypeMonthly({ month, year, type })
      .then(data => setIncome(data))
      .catch(error => setIncome({ sum: null }));

    type = 'expense';
    getByTypeMonthly({ month, year, type })
      .then(data => setExpense(data))
      .catch(error => setExpense({ sum: null }));
  }, [month, year]);

  return (
    <div className={css.section}>
      <div className={css.transactionWrapper}>
        <p className={css.title}>Расходы:</p>
        <span className={css.redText}>
          - {!expense.sum ? 0 : expense.sum}.00 грн.
        </span>
      </div>
      <Band className={css.band} />
      <div className={css.transactionWrapper}>
        <p className={css.title}>Доходы:</p>
        <span className={css.greenText}>
          + {!income.sum ? 0 : income.sum}.00 грн.
        </span>
      </div>
    </div>
  );
};
export default CostsAndIncome;
