import React from "react";
import { createPortal } from 'react-dom';
import css from './TeamModal.module.css';
import rabbits from '../../../images/rabbits.png';

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
            <div className={css.main}>
            <div className={css.logo}>
              <img src={rabbits} alt="rabbits" />
            </div>
            <div className={`${css.teamLead} ${css.member}`}>
              <div className={css.photo}>Photo</div>
              <div className={css.leadInfo}>
                <span className={css.name}>Team Lead</span>
                <div className={css.social}>
                  <a href="linkedin.com" className={css.link}>In</a>
                  <a href="github.com" className={css.link}>Git</a>
                </div>
              </div>
            </div>
            </div>
            <ul className={css.membersList}>
              <li className={css.member}>
                <div className={css.photo}>Photo</div>
                <span className={css.name}>Name Name Name</span>
                <div className={css.social}>
                  <a href="linkedin.com" className={css.link}>In</a>
                  <a href="github.com" className={css.link}>Git</a>
                </div>
              </li>
              <li className={css.member}>
                <div className={css.photo}>Photo</div>
                <span className={css.name}>Name Name Name</span>
                <div className={css.social}>
                  <a href="linkedin.com" className={css.link}>In</a>
                  <a href="github.com" className={css.link}>Git</a>
                </div>
              </li>
              <li className={css.member}>
                <div className={css.photo}>Photo</div>
                <span className={css.name}>Name Name Name</span>
                <div className={css.social}>
                  <a href="linkedin.com" className={css.link}>In</a>
                  <a href="github.com" className={css.link}>Git</a>
                </div>
              </li>
              <li className={css.member}>
                <div className={css.photo}>Photo</div>
                <span className={css.name}>Name Name Name</span>
                <div className={css.social}>
                  <a href="linkedin.com" className={css.link}>In</a>
                  <a href="github.com" className={css.link}>Git</a>
                </div>
              </li>
              <li className={css.member}>
                <div className={css.photo}>Photo</div>
                <span className={css.name}>Name Name Name</span>
                <div className={css.social}>
                  <a href="linkedin.com" className={css.link}>In</a>
                  <a href="github.com" className={css.link}>Git</a>
                </div>
              </li>
              <li className={css.member}>
                <div className={css.photo}>Photo</div>
                <span className={css.name}>Name Name Name</span>
                <div className={css.social}>
                  <a href="linkedin.com" className={css.link}>In</a>
                  <a href="github.com" className={css.link}>Git</a>
                </div>
              </li>
              <li className={css.member}>
                <div className={css.photo}>Photo</div>
                <span className={css.name}>Name Name Name</span>
                <div className={css.social}>
                  <a href="linkedin.com" className={css.link}>In</a>
                  <a href="github.com" className={css.link}>Git</a>
                </div>
              </li>
              <li className={css.member}>
                <div className={css.photo}>Photo</div>
                <span className={css.name}>Name Name Name</span>
                <div className={css.social}>
                  <a href="linkedin.com" className={css.link}>In</a>
                  <a href="github.com" className={css.link}>Git</a>
                </div>
              </li>
              <li className={css.member}>
                <div className={css.photo}>Photo</div>
                <span className={css.name}>Name Name Name</span>
                <div className={css.social}>
                  <a href="linkedin.com" className={css.link}>In</a>
                  <a href="github.com" className={css.link}>Git</a>
                </div>
              </li>
              <li className={css.member}>
                <div className={css.photo}>Photo</div>
                <span className={css.name}>Name Name Name</span>
                <div className={css.social}>
                  <a href="linkedin.com" className={css.link}>In</a>
                  <a href="github.com" className={css.link}>Git</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      }
    </>,
    modalRootRef,
  );
};

export default Modal;