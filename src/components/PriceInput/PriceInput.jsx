import css from './PriceInput.module.css';
import sprite from '../../images/svg/sprite.svg';

function PriceInput(){
  return(
    <div className={css.container}>
      <input id='amount' className={css.input} type='number' min='0' step='1'  placeholder='00' required/>
      <div className={css.calcContainer}>
        <svg width='20' height='20'>
          <use href={`${sprite}#icon-calculator`}></use>  
        </svg>
      </div>
    </div>
  )
}

export default PriceInput;