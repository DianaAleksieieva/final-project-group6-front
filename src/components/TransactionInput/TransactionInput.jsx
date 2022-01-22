import { useState } from 'react';
import css from './TransactionInput.module.css';
import { DescriptionInput, Droplist, PriceInput } from '..';


function TransactionInput({ transactionType }) {
  const { category, title, description } = transactionType;
  const [categotyValue, setCategotyValue] = useState(null);
  
  return(
    <div className={css.container}>
      <DescriptionInput descriptionTitle={description}/>
      <Droplist categories={category} categoryTitle={title} data={categotyValue} onChange={(v) => setCategotyValue(v)}/>
      <PriceInput/>
    </div>
  )
}

export default TransactionInput;