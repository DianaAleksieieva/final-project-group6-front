import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { authOperations } from '../../redux/auth';
import css from './LoginForm.module.css';

function LoginForm() {
  const dispatch = useDispatch();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    delayError: 500,
    mode: 'onChange',
  });

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };

  const onSubmit = data => {
    dispatch(authOperations.logIn(data));
    reset();
    // setEmail('');
    // setPassword('');
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
        onSubmit={handleSubmit(onSubmit)}
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
            {...register('email', {
              required: 'это обязательное поле',
              pattern: {
                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                message: 'Неправильный формат email',
              },
            })}
          />
          <p className={css.error}>{errors.email?.message}</p>
        </label>
        <label className={css.formLabel}>
          <p className={css.formLabelText}>Пароль:</p>
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            className={css.passwordInput}
            {...register('password', {
              required: 'это обязательное поле',
              minLength: {
                value: 6,
                message: 'Минимальная длина должна быть не менее 6 символов',
              },
            })}
          />
          <p className={css.error}>{errors.password?.message}</p>
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
