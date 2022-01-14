import css from './Body.module.css';
import { Hero, LoginForm, Dashboard } from '../';
import { options } from '../../db';

function Body() {
  const { isLoggedIn } = options;
  return (
    <section className={css.body}>
      {!isLoggedIn && <Hero />}
      {!isLoggedIn && <LoginForm />}
      {isLoggedIn && <Dashboard />}
    </section>
  );
}

export default Body;
