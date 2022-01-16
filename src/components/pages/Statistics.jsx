import css from '../pagesStyles/Statistics.module.css'

export default function Statistics() {

  return (
    <div>
      <button type="button">Расход</button>
      <button type="button">Доход</button>
      <div className={css.innerContainer}>
        Statistics
      </div>
    </div>
  )
}
