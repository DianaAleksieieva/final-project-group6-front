import css from './Balance.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import sprite from '../../images/svg/sprite.svg';

function StatisticButton() {
  return (
    <Link className={css.statisticButton} to="/statistics">
      <span className={css.text_statistic}>Перейти к отчетам</span>
      <svg width="14" height="14" className={css.imageState}>
        <use href={`${sprite}#icon-stats`}></use>
      </svg>
    </Link>
  );
}

export default StatisticButton;
