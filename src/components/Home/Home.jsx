import { useSelector } from 'react-redux';
import { Hero, LoginForm } from '..';
// import { options } from '../../db';
import Balance from '../Balance';
import Dashboard from '../pages/Dashboard';
import Statistics from '../pages/Statistics';
import { authSelectors } from '../../redux/auth';
import css from './Home.module.css';

function Home() {
  // const { isLoggedIn } = options;
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
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
  );
}

export default Home;
