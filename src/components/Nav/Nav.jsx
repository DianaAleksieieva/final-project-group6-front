import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import css from './Nav.module.css';
import sprite from '../../images/svg/sprite.svg';
import { options } from '../../db';

import line from '../../images/svg/line.svg';


function Nav() {
  const { userName, avatarUrl } = options;
  const { isShowingModal, toggle, handleBackdropClick} = useModal();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === "Escape") {
        toggle();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });


  return (
    <nav className={css.nav}>
      <div className={css.user}>
        <img className={css.userAvatar} src={avatarUrl} alt="user avatar" />
        <span className={css.userName}>{userName}</span>
      </div>
      <img className={css.line} src={line} alt="logout" />
      <div className={css.exit}>
        <svg className={css.exitIcon} onClick={() => toggle()} width='16' height='16'>
          <use href={`${sprite}#icon-logout`}></use>
        </svg>
        <span className={css.exitLink} onClick={() => toggle()}>
          Выйти
        </span>
        {isShowingModal && (
          <Modal
            textContent ={'Вы действительно хотите выйти?'}
            toLogout={() => dispatch(authOperations.logOut())}
            closeModal={toggle}
            handleBackdropClick={handleBackdropClick}
          />
        )}
      </div>
    </nav>
  );
}

export default Nav;
