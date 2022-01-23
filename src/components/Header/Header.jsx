import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { Nav } from '../';
import css from './Header.module.css';
import logo from '../../images/svg/logo.svg';

function Header() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <section className={css.header}>
      <img src={logo} alt="Kapusta" />
      {isLoggedIn && <Nav />}
    </section>
  );
}

export default Header;
