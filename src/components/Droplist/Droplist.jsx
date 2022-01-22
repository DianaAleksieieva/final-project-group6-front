import { useState, useRef, useEffect } from 'react';
import css from './Droplist.module.css';

function Droplist({categories, categoryTitle, data, onChange}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close)
  }, []);

  function close(e) {
    setOpen(e && e.target === ref.current)
  }
  
  return(
    <>
    <input id='category' type="hidden" value={data? data.value: ''} onChange={(e) => e.target.value = data} required/>
    <div className={css.dropdown}>
      <div className={css.control} onClick={() => setOpen((prev) => !prev)}>
        <div className={css.selectedValue} ref={ref} style={data && {color: '#52555F'}}>{data? data.label: categoryTitle}</div>
        <div className={`${css.arrow} ${open ? css.open: null}`}></div>
      </div>
      <div className={`${css.options} ${open ? css.open: null}`}>
        {categories.map((category) => (
        <div   
          key={category.value} 
          className={`${css.option} ${data === category ? css.selected: null}`} 
          onClick={() => {
          onChange(category);
          setOpen(false);
        }}>
          {category.label}
        </div>
        ))}    
      </div>
    </div>
    </>
  )
}
  
export default Droplist;

// function Droplist({ categories, categoryTitle }) {
//   return (
//     <select id='category' className={css.select} defaultValue='0' required>
//       <option value="0" >{categoryTitle}</option>
//         { categories.map(({value, label}) => (
//           <option key={value}>{label}</option>
//         ))}
//     </select>
//   );
// }

// export default Droplist;