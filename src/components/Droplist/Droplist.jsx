// import Select from 'react-select';
import css from './Droplist.module.css';

// const customStyles = {
//   option: (provided, state) => ({
//     ...provided,
//     margin: '0',
//     padding: '10px 20px',
//     border: '2px solid #F5F6FB',
//     color: state.isSelected ? '#52555F' : '#C7CCDC',
//     backgroundColor: state.isSelected ? '#F5F6FB' : '#FFFFFF',
//   }),
//   control: () => ({
//     // none of react-select's styles are passed to <Control />
//     margin: '0',
//     padding: '8px 10px',
//     height: 42,
//   }),
//   singleValue: (provided, state) => {
//     const opacity = state.isDisabled ? 0.5 : 1;
//     const transition = 'opacity 300ms';

//     return { ...provided, opacity, transition };
//   }
// }

// function Droplist({categories, categoryTitle}) {
//   return (
//       <Select 
//         styles={customStyles}
//         className={css.select}
//         placeholder={categoryTitle}
//         options={categories}
//       />
//   );
// }

function Droplist({categories, categoryTitle}) {
  return (
    <select className={css.select} placeholder={categoryTitle}>
      { categories.map(({value, label}) => (
        <option key={value}>{label}</option>
      ))}
    </select>
  );
}

export default Droplist;