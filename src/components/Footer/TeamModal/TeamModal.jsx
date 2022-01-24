import React from "react";
import css from './TeamModal.module.css';
import { createPortal } from 'react-dom';
const modalRootRef = document.querySelector('#root');

function Modal({ handleBackdropClick, closeModal, toLogout, textContent}) {
  return createPortal(
    <>
      {
        <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal_content}>
        <button className={css.modalCloseBtn} onClick={closeModal} type="button" >
          <svg className={css.modalCloseIcon} width="12" height="12" />
        </button>
        <h1 className={css.teamName}>Rabbits</h1>
        <div className={css.teamMembers}>
          <ul className={css.membersList}>
            <li className={css.member}></li>
            <li className={css.member}></li>
            <li className={css.member}></li>
            <li className={css.member}></li>
            <li className={css.member}></li>
            <li className={css.member}></li>
            <li className={css.member}></li>
            <li className={css.member}></li>
            <li className={css.member}></li>
            <li className={css.member}></li>
            <li className={css.member}></li>
          </ul>
        </div>
      </div>
    </div>
      }
    </>,
    modalRootRef,
  );
};

export default Modal;