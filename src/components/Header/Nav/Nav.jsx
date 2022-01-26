import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from '../../../redux/auth';
import Modal from '../../Modal/Modal';
import useModal from '../../Modal/useModal';
import css from './Nav.module.css';
import sprite from '../../../images/svg/sprite.svg';
import { authSelectors } from '../../../redux/auth';

function Nav() {
  const { isShowingModal, toggle, handleBackdropClick } = useModal();
  const dispatch = useDispatch();

  const userName = useSelector(authSelectors.getUserName);
  const avatarUrl = useSelector(authSelectors.avatarURL);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
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
      <svg className={css.line} width="2" height="36">
        <use href={`${sprite}#icon-line`}></use>
      </svg>
      <div className={css.exit}>
        <svg
          className={css.exitIcon}
          onClick={() => toggle()}
          width="16"
          height="16"
        >
          <use href={`${sprite}#icon-logout`}></use>
        </svg>
        <span className={css.exitLink} onClick={() => toggle()}>
          Выйти
        </span>
        {isShowingModal && (
          <Modal
            textContent={'Вы действительно хотите выйти?'}
            closeModal={toggle}
            handleBackdropClick={handleBackdropClick}
            toLogout={() => {
              dispatch(authOperations.logOut())
              setTimeout(() => {
                window.location.reload();
              }, 200);
            }}
          />
        )}
      </div>
    </nav>
  );
}

export default Nav;
