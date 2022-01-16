import { Hero, LoginForm } from '..';
import { options } from '../../db';
import Balance from '../Balance';
import Dashboard from '../pages/Dashboard';
import Statistics from '../pages/Statistics';
import css from './Home.module.css';

function Home() {
  const { isLoggedIn } = options;
  
  return (
    <section className={css.home}>
      {!isLoggedIn && (
        <>
        <Hero />
        <LoginForm />
        </>
      )}

      {isLoggedIn && <Balance />}
      {isLoggedIn && <Dashboard />}
      {isLoggedIn && <Statistics />}
    </section>
  )
}

export default Home;
