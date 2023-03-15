import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { authOperations} from '../../redux/auth';
import css from './LoginForm.module.css';

function LoginForm() {
  const dispatch = useDispatch();
  const [actionType, setActionType] = useState('');
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    delayError: 500,
    mode: 'onChange',
  });

  const onSubmit = data => {
    const { email, password } = data; 
    const userName = data.email?.split('@', 1);

    switch (actionType) {
      case 'login':
        dispatch(authOperations.logIn(data));
        return;
      
      case 'register':
        dispatch(authOperations.register({
          email, password, userName: `${userName}`
        }));
        // reset();
        return;
      
      default:
        return;
    }
  };

  return (
    <div className={css.formContainer}>
      <p className={css.googleText}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      <a
        className={css.google}
        href="https://final-project-group6-back.herokuapp.com/api/auth/google"
      >
        Google
      </a>
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
          <p className={css.formLabelText}>
            <span className={css.errorSbl}>{errors.email && <>*</>}</span>
            Электронная почта:
          </p>
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
          <p className={css.formLabelText}>
            <span className={css.errorSbl}>{errors.password && <>*</>}</span>
            Пароль:
          </p>
          <div className={css.passwordWrapper}>
            <input
              type={values.showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Пароль"
              className={css.passwordInput}
              {...register('password', {
                required: 'это обязательное поле',
                minLength: {
                  value: 6,
                  message: 'Минимальная длина должна быть не менее 6 символов',
                },
                maxLength: {
                  value: 10,
                  message: 'Допустимая длина не более 10 символов',
                }
              })}
            ></input>
            <IconButton
              className={css.eye}
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </div>

          <p className={css.error}>{errors.password?.message}</p>
        </label>
        <div className={css.formButtons}>
          <button
            type="submit"
            className={css.loginBtn}
            onClick={e => {
              setActionType('login');
            }}
          >
            Войти
          </button>
          <button
            type="submit"
            className={css.registrationLink}
            onClick={e => {
              setActionType('register');
            }}
          >
            Регистрация
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
