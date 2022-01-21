import css from './TransactionHistory.module.css'

function TransactionHistory({ transactions }) {
    console.log(transactions);

    return(
        <div className= {css.container}>
            <div className={css.header}>
            <p>Дата</p>
            <p>Описание</p>
            <p>Категория</p>
            <p>Сумма</p>
            </div>
            <div className={css.blok}>
                <ul className={css.list}>

                </ul>       
            </div>
            
        </div>
           
        
    )
}

export default TransactionHistory;