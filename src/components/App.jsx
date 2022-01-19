import PrivateRoute from '../helpers/routes/PrivateRoute';
import GoHome from '../helpers/routes/GoHome';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Container } from '.';
import { authOperations } from '../redux/auth';

import css from './App.module.css';
// import { Header, Body, Footer, DayPicker, TransactionInput } from '.';

const LayoutView = lazy(() =>
  import('../views/LayoutPage' /* webpackChunkName: "layout-page" */),
);

const HomeView = lazy(() =>
  import('../views/HomePage' /* webpackChunkName: "home-page" */),
);

const StatisticsView = lazy(() =>
  import('../views/StatisticsPage' /* webpackChunkName: "statistics-page" */),
);

const LoginView = lazy(() =>
  import('../views/LoginPage' /* webpackChunkName: "login-page" */),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    // <div className={css.app}>
    //   <div className={css.container}>
    //     <Header />
    //     <TransactionInput />
    //     <Body />
    //     {/* <DayPicker /> */}
    //     <Footer />
    //   </div>
    // </div>
    <>
      <div className={css.background}></div>
      <Container>
        <Suspense
          fallback={<h1 style={{ textAlign: 'center' }}>Loading ...</h1>}
        >
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <LayoutView />
                </PrivateRoute>
              }
            >
              <Route index element={<HomeView />} />
              <Route path="/statistics" element={<StatisticsView />} />
            </Route>

            <Route
              path="/login"
              element={
                <GoHome>
                  <LoginView />
                </GoHome>
              }
            />

            <Route
              path="*"
              element={<h1 style={{ textAlign: 'center' }}>Not found!</h1>}
            />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
