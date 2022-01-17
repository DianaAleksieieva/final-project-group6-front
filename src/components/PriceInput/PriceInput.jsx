import css from './PriceInput.module.css';
import calculator from '../../images/svg/calculator.svg';

function PriceInput(){
  return(
    <div className={css.container}>
      <input className={css.input} type="text" placeholder="0.00"/>
      <img className={css.calculator} src={calculator} alt="calculator" />
    </div>
  )
}

export default PriceInput;