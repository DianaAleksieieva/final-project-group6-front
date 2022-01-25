import React from "react";
import { createPortal } from 'react-dom';
import css from './TeamModal.module.css';
import rabbits from '../../../images/svg/Rabbits.svg';
import gitHub from '../../../images/svg/git.svg';
import linkedIn from '../../../images/svg/in.svg';


const modalRootRef = document.querySelector('#root');

function TeamModal({ handleBackdropClick, closeModal, members}) {
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
              <img className={css.photo} src={window.location.origin + "/team/Aleksieieva.jpg"} alt="Diana Aleksieieva" />
              <div className={css.leadInfo}>
                <span className={css.name}>Diana Aleksieieva</span>
                <div className={css.social}>
                  <a href="https://github.com/DianaAleksieieva" className={css.link} target="_blank" rel="noreferrer">
                    <img src={gitHub} alt="GitHub" />
                  </a>
                  <a href="http://linkedin.com/in/diana-aleksieieva-0687921b2" className={css.link} target="_blank" rel="noreferrer">
                    <img src={linkedIn} alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </div>
            </div>
            <ul className={css.membersList}>
              {members.map(({id, name, photo, social}) => (
                <li key={id} className={css.member}>
                    <img className={css.photo} src={window.location.origin + `/team/${photo}`} alt={name}/>
                  <span className={css.name}>{name}</span>
                  <div className={css.social}>
                  <a href={social.github} className={css.link} target="_blank" rel="noreferrer">
                    <img src={gitHub} alt="GitHub" />
                  </a>
                  <a href={social.linkedin} className={css.link} target="_blank" rel="noreferrer">
                    <img src={linkedIn} alt="LinkedIn" />
                  </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      }
    </>,
    modalRootRef,
    );
  };

export default TeamModal;