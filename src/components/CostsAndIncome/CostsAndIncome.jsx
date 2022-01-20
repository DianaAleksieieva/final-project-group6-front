import { React, useState, useEffect } from 'react';

import css from './CostsAndIncome.module.css';
import { ReactComponent as Band } from '../../images/svg/band.svg';
import { getByTypeMonthly } from '../../api/transactionsAPI';

const CostsAndIncome = ({ month, year }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const type = 'income';
    getByTypeMonthly({ month, year, type })
      .then(data => setData(data))
      .catch(error => setData({ sum: null }));
  }, [month, year]);
  console.log(data);

  return (
    <div className={css.section}>
      <div className={css.transactionWrapper}>
        <p className={css.title}>Расходы:</p>
        <span className={css.redText}>- 18 000.00 грн.</span>
      </div>
      <Band className={css.band} />
      <div className={css.transactionWrapper}>
        <p className={css.title}>Доходы:</p>
        <span className={css.greenText}>
          + {!data.sum ? 0 : data.sum}.00 грн.
        </span>
      </div>
    </div>
  );
};
export default CostsAndIncome;
