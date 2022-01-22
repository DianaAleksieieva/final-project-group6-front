import css from './TransactionHistory.module.css'

function TransactionHistory({ transactions, handleDelete }) {
    // на кнопку видалити добавляэш onClick={(id) => deleteTransaction(id)}

    // const deleteTransaction = (id) => {
    //     handleDelete(id)
    // }

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