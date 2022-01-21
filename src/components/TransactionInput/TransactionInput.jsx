import css from './TransactionInput.module.css';
import { DescriptionInput, Droplist, PriceInput } from '..';


function TransactionInput({ transactionType }) {
  const { category, title, description } = transactionType;
  
  return(
    <div className={css.container}>
      <DescriptionInput descriptionTitle={description}/>
      <Droplist categories={category} categoryTitle={title}/>
      <PriceInput/>
    </div>
  )
}

export default TransactionInput;