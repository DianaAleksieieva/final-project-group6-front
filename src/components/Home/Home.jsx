import { Hero, LoginForm } from '..';
import { options } from '../../db';
import Balance from '../Balance';
import Dashboard from '../Dashboard/Dashboard';
import Statistics from '../Statistics/Statistics';
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
