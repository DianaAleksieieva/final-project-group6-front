import css from './Dashboard.module.css'

export default function Dashboard() {

  const handleButtonClick = (e) => {
    // console.log(e.target.id);
  }

  return (
    <div >
      <button onClick={handleButtonClick} type="button" id="exspences">Расход</button>
      <button onClick={handleButtonClick} type="button" id="incomes">Доход</button>
      <div className={css.innerContainer}>
        Dashboard
      </div>
    </div>
  )
}
