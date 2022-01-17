import Dashboard from '../Dashboard';
import css from './Body.module.css';
// import { lazy } from 'react';
import { Balance } from '../';

// const Statistics = lazy(() => import("../Statistics"))


function Body() {
  return (
    <section className={css.body}>
      <Balance/>
      <Dashboard />
      {/* <Statistics /> */}
    </section>
  );
}

export default Body;
