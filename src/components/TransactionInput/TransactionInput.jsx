import { DescriptionInput } from '..';
import { Droplist } from '..';
import { PriceInput } from '..';
import css from './TransactionInput.module.css';

const expenseCategory = [
  { value: 'Продукты', label: 'Продукты' },
  { value: 'Алкоголь', label: 'Алкоголь' },
  { value: 'Развлечение', label: 'Развлечение' },
  { value: 'Здоровье', label: 'Здоровье' },
  { value: 'Транспорт', label: 'Транспорт' },
  { value: 'Все для дома', label: 'Все для дома' },
  { value: 'Техника', label: 'Техника' },
  { value: 'Комуналка, Связь', label: 'Комуналка, Связь' },
  { value: 'Спорт, Хобби', label: 'Спорт, Хобби' },
  { value: 'Образование', label: 'Образование' },
  { value: 'Прочее', label: 'Прочее' },
];

// const profitCategory = [
//   { value: 'ЗП', label: 'ЗП' },
//   { value: 'Доп. доход', label: 'Доп. доход' },
// ]

function TransactionInput(){
  return(
    <div className={css.container}>
      <DescriptionInput descriptionTitle='Описание расхода'/>
      <Droplist categories={expenseCategory} categoryTitle='Категория расхода'/>
      <PriceInput/>
    </div>
  )
}

export default TransactionInput;