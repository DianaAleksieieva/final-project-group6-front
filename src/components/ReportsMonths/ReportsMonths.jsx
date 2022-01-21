import css from './ReportsMonths.module.css'
// import {Month} from '../../constans'
// import {getByTypeYearly} from '../../api/transactionsAPI';


function ReportsMonths ({report}){
    // console.log('report:', report);
    
    return (
        <div className={css.container}>
           <h1 className={css.title}>СВОДКА</h1>
            <ol className={css.list}>
                
                {/* <li className={css.item}> <span className={css.item_text}>Ноябрь</span> <span className={css.item_number}>10 000.00</span></li>
                <li className={css.item}> <span className={css.item_text}>Октябрь</span><span className={css.item_number}>3000 000.00</span></li>
                <li className={css.item}> <span className={css.item_text}>Октябрь</span><span className={css.item_number}>30 000.00</span></li>
                <li className={css.item}> <span className={css.item_text}>Октябрь</span><span className={css.item_number}>30 000.00</span></li>
                <li className={css.item}> <span className={css.item_text}>Октябрь</span><span className={css.item_number}>30 000.00</span></li>
                <li className={css.item}> <span className={css.item_text}>Октябрь</span><span className={css.item_number}>30 000.00</span></li> */}
            </ol>
        </div>
    )
}

export default ReportsMonths;