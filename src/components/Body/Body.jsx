import css from './Body.module.css';
// import { lazy, Suspense } from 'react';
// import { Outlet, Route, Routes } from 'react-router-dom';

// const Dashboard = lazy(() => import("../Home"));
// const Statistics = lazy(() => import("../pages/Statistics"))
// const Register = lazy(() => import("../pages/Register"));

import { Hero, LoginForm, Balance } from '../';
import { options } from '../../db';
const { isLoggedIn } = options;

function Body() {
  return (
    <section className={css.body}>
      {!isLoggedIn && <Balance/>}
      {!isLoggedIn && <Hero/>}
      {!isLoggedIn && <LoginForm/>}
      {/* {isLoggedIn && <Dashboard/>} */}
    </section>
  );
}

export default Body;
