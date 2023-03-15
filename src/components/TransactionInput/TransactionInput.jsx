import css from './TransactionInput.module.css';
import { DescriptionInput, Droplist, PriceInput } from '..';


function TransactionInput({ transactionType, value, onChange }) {
  const { category, title, description } = transactionType;
  
  return(
    <div className={css.container}>
      <DescriptionInput descriptionTitle={description}/>
      <Droplist categories={category} categoryTitle={title} data={value} onChange={onChange}/>
      <PriceInput/>
    </div>
  )
}

export default TransactionInput;