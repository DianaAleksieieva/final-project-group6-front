import { useEffect } from 'react';
import TeamModal from './TeamModal';
import useModal from '../Modal/useModal';
// import { Link } from 'react-router-dom';
import css from './Footer.module.css';
import sprite from '../../images/svg/sprite.svg';

function Footer(){
  const { isShowingModal, toggle, handleBackdropClick } = useModal();

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

  return(
    <div className={css.bgWrapper}>
      <div className={css.container}>
        <section className={css.footer}>
          {/* <Link to='/'>
            <svg className={css.logo} width="120" height="41.3">
              <use href={`${sprite}#icon-logo`}></use>
            </svg>
          </Link> */}
          <span>LOGO</span>
          <div className={css.team}>
            <span className={css.teamTitle}>Our Team</span>
            <svg className={css.arrow} width="24" height="24">
              <use href={`${sprite}#icon-arrow`} fill='black'></use>
            </svg>
            <svg className={css.kapusta} onClick={() => toggle()} width="40" height="40">
              <use href={`${sprite}#icon-kapusta`}></use>
            </svg>
          </div>
        </section>
        <div className={css.copyright}>Copyright © 2022 Project group 666</div>
      </div>
      {isShowingModal && (
        <TeamModal
          textContent={'Project group 666'}
          closeModal={toggle}
          handleBackdropClick={handleBackdropClick}
        />
      )}
    </div>
  )
}

export default Footer;