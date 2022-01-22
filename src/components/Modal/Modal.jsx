import React from "react";
import PropTypes from "prop-types";
import css from './Modal.module.css';
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
        <p className={css.textContent}>{textContent}</p>
        <div className={css.btnContainer}>
          <button className={css.btn}
            type="button"
            onClick={toLogout}
          >
            ДА
          </button>
          <button className={css.btn} onClick={closeModal} type="button" >
            НЕТ
          </button>
        </div>
      </div>
    </div>
      }
    </>,
    modalRootRef,
  );
};


Modal.propTypes = {
  text: PropTypes.string,
  closeModal: PropTypes.func,
  toLogout: PropTypes.func,
  handleBackdropClick: PropTypes.func,
};

export default Modal;