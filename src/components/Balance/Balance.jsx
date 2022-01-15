import css from './Balance.module.css';
import { Link } from 'react-router-dom';

export default function Balance() {
  return (
    <div className={css.container}>
      <h3>Баланс:</h3>
      <form >
        <input type="number" />
        <button type="submit">Подтвердить</button>
      </form>

      <Link to="/statistics">Перейти к отчетам</Link>
    </div>
  )
}
