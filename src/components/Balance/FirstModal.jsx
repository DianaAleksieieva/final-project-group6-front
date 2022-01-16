import css from './Balance.module.css';

function FirstModal() {
  return (
    <>
      <div className={css.modal}>
        <div className={css.triangle}></div>
        <p className={css.modalInfo}>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </p>
        <p className={css.modalInfo}>
          Ты не можешь тратить деньги пока их у тебя нет :)
        </p>
      </div>
    </>
  );
}

export default FirstModal;
