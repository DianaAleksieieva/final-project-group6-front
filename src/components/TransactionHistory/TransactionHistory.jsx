import css from './TransactionHistory.module.css'
import sprite from '../../images/svg/sprite.svg';


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
                <li className={css.item}>
                        <span className={css.itemDate}>10.10.2010</span>
                        <span className={css.itemDesc}>Lorem ipsddsdsum dolor</span>
                        <span className={css.itemCategory}>Развлечения</span>
                        <span className={css.itemSum}>2222122 грн</span>
                        <span className={css.itemBtn}>
                        <button className={css.itemBtn}>
                        <svg className={css.itemSvg} width='20' height='20'>
          <use href={`${sprite}#icon-delete`}></use>  
        </svg>
                        </button>
                        </span>
                    </li>
                    <li className={css.item}>
                        <span className={css.itemDate}>01.10.2010</span>
                        <span className={css.itemDesc}>Lorem ipsddsadsadsadsadsadasdsum dolor</span>
                        <span className={css.itemCategory}>Авто</span>
                        <span className={css.itemSum}>10 000 000 грн</span>
                        <span className={css.itemBtn}>
                        <button className={css.itemBtn}>
                        <svg className={css.itemSvg} width='20' height='20'>
          <use href={`${sprite}#icon-delete`}></use>  
        </svg>
                        </button>
                        </span>
                    </li>
                    <li className={css.item}>
                        <span className={css.itemDate}>01.10.2010</span>
                        <span className={css.itemDesc}>Lordsadsadasdsum dolor</span>
                        <span className={css.itemCategory}>Авто</span>
                        <span className={css.itemSum}>2 грн</span>
                        <span className={css.itemBtn}>
                        <button className={css.itemBtn}>
                        <svg className={css.itemSvg} width='20' height='20'>
          <use href={`${sprite}#icon-delete`}></use>  
        </svg>
                        </button>
                        </span>
                    </li>
                    
                    <li className={css.item}></li>
                    <li className={css.item}></li>
                    <li className={css.item}></li>
                    <li className={css.item}></li>
                    <li className={css.item}></li>
                    <li className={css.item}></li>
                    <li className={css.item}></li>
                    <li className={css.item}></li>
                    <li className={css.item}></li>
                    <li className={css.item}></li>
                    <li className={css.item}></li>
                    
                </ul>       
            </div>
            
        </div>
           
        
    )
}

export default TransactionHistory;