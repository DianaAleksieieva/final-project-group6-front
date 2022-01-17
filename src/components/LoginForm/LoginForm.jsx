import { Link } from 'react-router-dom';
import css from './LoginForm.module.css';

function LoginForm() {
  return (
    <div className={css.formContainer}>
      <p className={css.googleText}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      <p className={css.google}>Google</p>
      <p className={css.heading}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <form className={css.form} action="" autoComplete="off">
        <label className={css.formLabel}>
          <p className={css.formLabelText}>Электронная почта:</p>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            className={css.mailInput}
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$"
            title="Неправильный формат email. Разрешенные символы: '._%+-"
            required
          />
        </label>
        <label className={css.formLabel}>
          <p className={css.formLabelText}>Пароль:</p>
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            className={css.passwordInput}
            title="Пароль может, сoстоять не меньше чем из трех символов"
            required
          />
        </label>
      </form>
      <div className={css.formButtons}>
        <button type="submit" className={css.loginBtn}>
          Войти
        </button>
        <Link to='/register' className={css.registrationLink}>
          Регистрация
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
