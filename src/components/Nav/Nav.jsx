import css from './Nav.module.css';
import logout from '../../images/svg/logout.svg';
import line from '../../images/svg/line.svg';
import { options } from '../../db';
function Nav() {
  const { userName, avatarUrl } = options;
  return (
    <nav className={css.nav}>
      <div className={css.user}>
        <img className={css.userAvatar} src={avatarUrl} alt="user avatar" />
        <span className={css.userName}>{userName}</span>
      </div>
      <img className={css.line} src={line} alt="logout" />
      <div className={css.exit}>
        <span className={css.exitIconLink} onClick={() => console.log('logout modal is open')}>
          <img className={css.exitIcon} src={logout} alt="line" />
        </span>
        <span className={css.exitLink} onClick={() => console.log('logout modal is open')}>
          Выйти
        </span>
      </div>
    </nav>
  );
}

export default Nav;
