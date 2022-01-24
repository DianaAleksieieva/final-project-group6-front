import css from './ReportsMonths.module.css'

import {Month} from '../../constans'


function ReportsMonths({ report }) {   
    // console.log('report:', report);

    // report.map(i => console.log(Month[Object.keys(i).toString()]))
    // report.map(i => console.log(Object.values(i).toString()))
    let indMonth = 0;
    return (
        <div className={css.container}>
            <h1 className={css.title}>СВОДКА</h1>
            <ol className={css.list}>

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



             </ol>
        </div>
    )
}

export default ReportsMonths;