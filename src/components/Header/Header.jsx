import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { Nav } from '../';
import css from './Header.module.css';
import sprite from '../../images/svg/sprite.svg';


function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <section className={css.header}>
      <Link to='/'>
      <svg width="90" height="31">
        <use href={`${sprite}#icon-logo`}></use>
      </svg>
      </Link>
      {isLoggedIn && <Nav />}
    </section>
  );
}

export default Header;
