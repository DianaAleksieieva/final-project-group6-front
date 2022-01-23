import { Header, Hero, LoginForm } from '../../components';
import css from './LoginPage.module.css';

function LoginPage() {
  return (
    <>
      <Header />
      <div className={css.wrapper}>
        <Hero />
        <LoginForm />
      </div>
    </>
  );
}

export default LoginPage;
