import Select from 'react-select';
import css from './Droplist.module.css';

// Формат списка категорий
// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

function Droplist({options, onChange}) {
  return (
      <Select 
        className={css.select}
        placeholder="Категории товара"
        onChange={(e) => onChange(e.value)}
        options={options}
      />
  );
}

export default Droplist;