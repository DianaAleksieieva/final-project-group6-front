import css from './Balance.module.css';
import React from 'react';
import sprite from '../../images/svg/sprite.svg';
import { Link } from 'react-router-dom';

function GoBackButton() {
  return (
    <Link className={css.GoBackButton} to="/">
      <svg width="18" height="12">
        <use href={`${sprite}#icon-arrowGoBack`}></use>
      </svg>
      <span className={css.text}>Вернуться на главную</span>
    </Link>
  );
}

export default GoBackButton;
