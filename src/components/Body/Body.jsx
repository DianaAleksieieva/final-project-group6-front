import css from './Body.module.css';
import { Hero, LoginForm, Dashboard, Balance } from '../';
import { options } from '../../db';

function Body() {
  const { isLoggedIn } = options;
  return (
    <section className={css.body}>
      {!isLoggedIn && <Balance/>}
      {!isLoggedIn && <Hero/>}
      {!isLoggedIn && <LoginForm/>}
      {isLoggedIn && <Dashboard/>}
    </section>
  );
}

export default Body;
