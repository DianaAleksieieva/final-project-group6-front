import css from './ReportsMonths.module.css'
import { Month } from '../../constans'
import { useEffect, useState } from 'react';


function ReportsMonths({ report }) {  
    // console.log('report:', report);
    // report.map(i => console.log(Month[Object.keys(i).toString()]))
    // report.map(i => console.log(Object.values(i).toString()))
    // let indMonth = 0;
    const [data, setData] = useState([]);
    // console.log(report)

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

    // console.log(data)
    

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



             {/* {report && report.map(i => {
                 let month = Month[Object.keys(i).toString()];
                 let sum = Object.values(i).toString()
                 let key = Object.keys(i).toString()
                 if (sum !== '0') {
                    indMonth += 1;
                 }
                 return <li key={key}  className={css.item}>
                     {(sum !== '0' && indMonth <= 6) && <span className={css.item_text}>{month}</span>}
                     {(sum !== '0' && indMonth <= 6) && <span className={css.item_number}>{sum}</span>}
                     
                 </li>
             })} */}



             </ul>
        </div>
    )
}

export default ReportsMonths;