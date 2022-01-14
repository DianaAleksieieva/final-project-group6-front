import css from './Header.module.css';
import logo from '../../images/svg/logo.svg';
// import { options } from '../../db';
import { Nav } from '..';

function Header() {
  // const { isLoggedIn } = options;
  return (
    <section className={css.header}>
      <img src={logo} alt="Kapusta" />
      <Nav />
      {/* {isLoggedIn && <Nav />} */}
    </section>
  );
}

export default Header;
