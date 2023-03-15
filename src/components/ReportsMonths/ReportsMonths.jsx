import css from './ReportsMonths.module.css'
import { Month } from '../../constans'
import { useEffect, useState } from 'react';

function ReportsMonths({ report }) {  
    const [data, setData] = useState([]);

    useEffect(() => {
      if(!report || report === []){
          return
        }
        const newReport = JSON.parse(JSON.stringify(report));

        newReport.map(i =>
            Object.keys(Month).includes(`${i.month}`)
            ? i.month = Month[i.month]
            : null
        )
        setData(newReport);
    }, [report]);
    
    return (
        <div className={css.container}>
            <h1 className={css.title}>СВОДКА</h1>
            <ul className={css.list}>

                {data && data.map(({sum, month}) => (
                    <li key={`${sum}+${month}`} className={css.item}>
                         <span className={css.item_text}>{month}</span>
                         <span className={css.item_number}>{sum}</span>
                    </li>
                ))}

             </ul>
        </div>
    )
    

//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>СВОДКА</h1>
//       <ol className={css.list}>
//         {data &&
//           data.map(({ sum, month }) => (
//             <li key={`${sum}+${month}`} className={css.item}>
//               <span className={css.item_text}>{month}</span>
//               <span className={css.item_number}>{sum}</span>
//             </li>
//           ))}
//       </ol>
//     </div>
//   )

}

export default ReportsMonths;