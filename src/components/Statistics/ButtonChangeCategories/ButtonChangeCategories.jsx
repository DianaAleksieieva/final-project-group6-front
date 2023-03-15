import { React } from 'react';
import { ReactComponent as ArrowLeft } from '../../../images/svg/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../../images/svg/ArrowRight.svg';
import css from './ButtonChangeCategories.module.css';

export default function ButtonChangeCategories({ active, changeStatus }) {

  return (
    <div className={css.container}>
      <button className={css.button} onClick={changeStatus}>
        <ArrowLeft className={css.color} />
      </button>

      {active === "Доход" ? (
        <p className={css.text}>Доходы</p>
      ) : (
        <p className={css.text}>Paсходы</p>
      )}

      <button className={css.button} onClick={changeStatus}>
        <ArrowRight className={css.color} />
      </button>
    </div>
  );
};