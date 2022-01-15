import css from './Body.module.css';
// import { lazy, Suspense } from 'react';
// import { Outlet, Route, Routes } from 'react-router-dom';

// const Dashboard = lazy(() => import("../Home"));
// const Statistics = lazy(() => import("../pages/Statistics"))
// const Register = lazy(() => import("../pages/Register"));

import { Hero, LoginForm, Dashboard, Balance } from '../';
import { options } from '../../db';
const { isLoggedIn } = options;

function Body() {
  return (
    <section className={css.body}>
      {/* <Suspense fallback={<h1>Loading...</h1>}>
         <Routes>
           <Route path="/" element={<Dashboard />} >
             <Route path="/register" element={<Register />} /> 
             <Route path="/statistics" element={<Statistics />} />
           </Route> 
         </Routes>
         <Outlet />
       </Suspense> */}
      {!isLoggedIn && <Balance />}
      {!isLoggedIn && <Hero />}
      {!isLoggedIn && <LoginForm />}
      {isLoggedIn && <Dashboard />}
    </section>
  );
}

export default Body;
