import css from './LoginForm.module.css';

function LoginForm() {
  return (
    <form className={css.loginForm}>
      <div className={css.formContainer}>
        <h2 className={css.heading}>
          Вы можете авторизоваться с помощью Google Account:
        </h2>
        <p className={css.google}>Google</p>
        <p className={css.hint}>
          Или зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </p>
        <label htmlFor={css.mailInput} className={css.label}>
          Электронная почта:
        </label>
        <input
          className={css.mailInput}
          type="text"
          placeholder="your@email.com"
        />
        <label htmlFor={css.passwordInput} className={css.label}>
          Пароль:
        </label>
        <input
          className={css.passwordInput}
          type="password"
          placeholder="Пароль"
        />
      </div>
      <div className={css.formButtons}>
        <button type="submit" className={css.loginBtn}>
          Войти
        </button>
        <a href="##" className={css.registrationLink}>
          Регистрация
        </a>
      </div>
    </form>
  );
}

export default LoginForm;
