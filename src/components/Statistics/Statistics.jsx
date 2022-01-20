import css from './Statistics.module.css';
import ButtonChangeCategories from '../ButtonChangeCategories';

export default function Statistics({ month, year }) {
  return (
    <div className={css.wrapper}>
      <ButtonChangeCategories />
    </div>
  );
}
