import css from './Dashboard.module.css';
import Button from '../Button/Button';
import ExpencesAndIncomes from './ExpencesAndIncomes';
import { useEffect, useState } from 'react';
import { EXPENCES, INCOMES } from '../../constans';

const buttons = ['Расход', 'Доход'];
const changeStyle = (active, text) => {
  return active === text ? css.activeButton : css.button;
};

function Dashboard({
  active,
  changeActiveState,
  stateDashboardButton,
  changestateDashboardButton,
}) {
  const [transactionType, setTransactionType] = useState(EXPENCES);

  useEffect(() => {
    if (active === 'Доход') {
      setTransactionType(INCOMES);
    } else if (active === 'Расход') {
      setTransactionType(EXPENCES);
    }
  }, [active]);

  const handleClick = e => {
    const { innerHTML } = e.target;
    changeActiveState(innerHTML);
  };

  return (
    <>
      <div className={css.buttonWrapper}>
        {buttons.map(text => (
          <Button
            key={text}
            type="button"
            className={changeStyle(active, text)}
            text={text}
            onClick={handleClick}
          />
        ))}
      </div>

      <ExpencesAndIncomes
        transactionType={transactionType}
        active={active}
        stateDashboardButton={stateDashboardButton}
        changestateDashboardButton={changestateDashboardButton}
      />
    </>
  );
}

export default Dashboard;
