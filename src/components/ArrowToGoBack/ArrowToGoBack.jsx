import { NavLink } from 'react-router-dom';
import { ReactComponent as ArrowGoBack } from '../../images/svg/ArrowGoBack.svg';

import css from './ArrowToGoBack.module.css';

const ArrowToGoBack = () => {
  return (
    <div type="button" className={css.goBack}>
      <NavLink className={css.link} to="/dashboard">
        <ArrowGoBack />
        <p className={css.text}>Вернуться на главную</p>
      </NavLink>
    </div>
  );
};

export default ArrowToGoBack;
