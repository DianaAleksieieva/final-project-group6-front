import css from './Balance.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

function GoBackButton() {
  return (
    <Link className={css.GoBackButton} to="/">
      Вернуться на главную
    </Link>
  );
}

export default GoBackButton;
