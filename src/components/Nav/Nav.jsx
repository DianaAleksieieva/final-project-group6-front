import css from './Nav.module.css';
import { options } from '../../db';
function Nav() {
  const { isLoggedIn, userName, avatarUrl } = options;
  return (
    <nav className={css.nav}>
      <div className={css.user}>
        <img className={css.userAvatar} src={avatarUrl} alt="user avatar" />
        <span className={css.userName}>{userName}</span>
      </div>
      <div className={css.exit}>
        <a href="#" className={css.exitLink}>
          Выйти
        </a>
      </div>
    </nav>
  );
}

export default Nav;
