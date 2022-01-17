import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import css from './LoginForm.module.css';

function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        console.log('email');
        return setEmail(value);
      case 'password':
        console.log('password');
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    console.log('submit');

    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={css.formContainer}>
      <p className={css.googleText}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      <p className={css.google}>Google</p>
      <p className={css.heading}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <form
        onSubmit={handleSubmit}
        className={css.form}
        action=""
        autoComplete="off"
      >
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
            value={email}
            onChange={handleChange}
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
            value={password}
            onChange={handleChange}
          />
        </label>
        <div className={css.formButtons}>
          <button type="submit" className={css.loginBtn}>
            Войти
          </button>
          <a href="##" className={css.registrationLink}>
            Регистрация
          </a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
