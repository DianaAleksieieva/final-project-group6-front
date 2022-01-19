import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import css from './Nav.module.css';
import logout from '../../images/svg/logout.svg';
import line from '../../images/svg/line.svg';
import { options } from '../../db';
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';

function Nav() {
  const { userName, avatarUrl } = options;
  const { isShowingModal, toggle } = useModal();
  const dispatch = useDispatch();

  return (
    <nav className={css.nav}>
      <div className={css.user}>
        <img className={css.userAvatar} src={avatarUrl} alt="user avatar" />
        <span className={css.userName}>{userName}</span>
      </div>
      <img className={css.line} src={line} alt="logout" />
      <div className={css.exit}>
        <span className={css.exitIconLink} onClick={() => toggle(console.log('logout modal is open'))}>
          <img className={css.exitIcon} src={logout} alt="line" />
        </span>
        <span
          className={css.exitLink}
          onClick={() => toggle(console.log('logout modal is open'))}
        >
          Выйти
        </span>
        {isShowingModal && (
          <Modal
            text={'Вы действительно хотите выйти?'}
            toLogout={() => {
              dispatch(authOperations.logOut);
              toggle();
            }}
            onClose={toggle}
          />
        )}
      </div>
    </nav>
  );
}

export default Nav;
