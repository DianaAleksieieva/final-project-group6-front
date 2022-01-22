import css from './Dashboard.module.css';
import Button from '../Button/Button';
import ExpencesAndIncomes from './ExpencesAndIncomes';
import { useEffect, useState } from 'react';
import { EXPENCES, INCOMES } from '../../constans';

const buttons = ['Расход', 'Доход']
const style = (active, text) => ({
  backgroundColor: active === text ? '#FEFEFE' : '#FAFBFD',
  color: active === text ? '#FF751D' : 'black', 
  borderBottomRightRadius: '0',
  borderBottomLeftRadius: '0',
  padding: "13px 34px",
  boxShadow: 'none',
  width: '138px'
})


function Dashboard() {
  const [active, setActive] = useState("Расход"); 
  const [transactionType, setTransactionType] = useState(EXPENCES)
  
  useEffect(() => {
    if (active === 'Доход') {
      setTransactionType(INCOMES)
    } else if (active === 'Расход') {
      setTransactionType(EXPENCES)
    }
  }, [active])

  const handleClick = (e) => {
    const { innerHTML } = e.target
    setActive(innerHTML)
  }

  return (
    <>
      <div className={css.buttonWrapper}>
        {buttons.map(text => 
          <Button 
            key={text}
            type='button'
            style={style(active, text)}
            text={text}
            onClick={handleClick}
          />
        )}
      </div>

      <ExpencesAndIncomes 
        transactionType={transactionType} 
        active={active}
      />
      
    </>
  )
}

export default Dashboard;
