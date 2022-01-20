import React from 'react';

import css from './CostsAndIncome.module.css';
import { ReactComponent as Band } from '../../images/svg/band.svg';

const CostsAndIncome = ({ month, year }) => {
  return (
    <div className={css.section}>
      <div className={css.transactionWrapper}>
        <p className={css.title}>Расходы:</p>
        <span className={css.redText}>- 18 000.00 грн.</span>
      </div>
      <Band className={css.band} />
      <div className={css.transactionWrapper}>
        <p className={css.title}>Доходы:</p>
        <span className={css.greenText}>+ 45 000.00 грн.</span>
      </div>
    </div>
  );
};
export default CostsAndIncome;
