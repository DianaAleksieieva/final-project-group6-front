import css from './TransactionHistory.module.css'
import sprite from '../../images/svg/sprite.svg';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import Loader from '../Loader';
import { format } from 'date-fns'
import { useEffect, useState } from 'react';

function TransactionHistory({ data, type, category, handleDelete, status }) {
  const { isShowingModal, toggle, handleBackdropClick } = useModal();

  const [id, setId] = useState('');
  const [transactions, setTransactions] = useState([]);


  useEffect(() => {
    if (data && data !== []) {
      const preparedTransactions = JSON.parse(JSON.stringify(data))

      preparedTransactions.forEach(i =>
        category.forEach(el => {
          if(i.category === el.value){
             i.category = el.label
          }
        })
      )
      setTransactions(preparedTransactions);
    }
  }, [category, data]);
  
  
  const getId = (e, id) => {
    const { localName } = e.target;

    if (localName === "li" || localName === "span") {
      return
    }
    setId(id)
    toggle()
  }
  

  const deleteTransaction = (id) => {
    handleDelete(id)
    toggle()
  }

  return (
    <div className={css.container}>
      <div className={css.header}>
        <p>Дата</p>
        <p>Описание</p>
        <p>Категория</p>
        <p>Сумма</p>
      </div>
      <div className={css.blok}>
        <ul className={css.list}>

          {status === 'pending' && <Loader />}

          {transactions && status !== 'pending' &&
            transactions.map(({ _id, date, description, category, amount }) => (

                <li className={css.item} key={_id} onClick={(e) => getId(e, _id)}>
                  <span className={css.itemDate}>{format(new Date(date), "dd.MM.yyyy")}</span>
                  <span className={css.itemDesc}>{description}</span>
                  <span className={css.itemCategory}>{category}</span>
                  {type === 'income' &&
                    <span className={css.itemSum}>{amount} грн.</span>
                  }
                  {type === 'expense' &&
                    <span className={css.itemSumRed} >- {amount} грн.</span>}
                  <span className={css.itemBtn}>
                    <button className={css.itemBtn} >
                      <svg className={css.itemSvg} width='20' height='20'>
                        <use href={`${sprite}#icon-delete`}></use>
                      </svg>
                    </button>

                  </span>
                </li>

              ))}
          {isShowingModal && (
            <Modal
              textContent={'Вы уверены?'}
              toLogout={() => deleteTransaction(id)}
              closeModal={toggle}
              handleBackdropClick={handleBackdropClick}
            />
          )}
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