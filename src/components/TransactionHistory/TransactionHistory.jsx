import css from './TransactionHistory.module.css'
import sprite from '../../images/svg/sprite.svg';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';
import { useDispatch } from "react-redux";
// import { transactionsAPI } from "../../api";

function TransactionHistory({ transactions, transactionType }) {
  const { format } = require('date-fns');
  const type = transactionType.type.toString();
  const trueType = type === 'expense'

  const { isShowingModal, toggle, handleBackdropClick } = useModal();
  const dispatch = useDispatch();

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

          {transactions && transactions.map(({ _id, date, description, category, amount }) => (

            <li className={css.item} key={_id}>
              <span className={css.itemDate}>{format(new Date(date), "dd.MM.yyyy")}</span>
              <span className={css.itemDesc}>{description}</span>
              <span className={css.itemCategory}>{category}</span>
              {!trueType ?
                <span className={css.itemSum}>{amount} грн.</span> :
                <span className={css.itemSumRed} >- {amount} грн.</span>}
              <span className={css.itemBtn}>
                <button className={css.itemBtn} onClick={() => toggle()}>
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
              // toLogout={}
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