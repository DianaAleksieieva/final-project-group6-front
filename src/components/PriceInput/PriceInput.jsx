import css from './PriceInput.module.css';
import sprite from '../../images/svg/sprite.svg';

function PriceInput(){
  return(
    <div className={css.container}>
      <input className={css.input} type='text' placeholder='00.0'/>
      <div className={css.calcContainer}>
        <svg width='20' height='20'>
          <use href={`${sprite}#icon-calculator`}></use>  
        </svg>
      </div>
    </div>
  )
}

export default PriceInput;