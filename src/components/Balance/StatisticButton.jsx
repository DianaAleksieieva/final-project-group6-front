import css from './Balance.module.css';
import React from 'react';
import { Link } from 'react-router-dom';


function StatisticButton() {

  return (
      <Link className={css.statisticButton} to="/statistics">
        Перейти к отчетам
      </Link>
  );
}

export default StatisticButton;
