import PrivateRoute from '../helpers/routes/PrivateRoute';
import GoHome from '../helpers/routes/GoHome';
// import css from './App.module.css';
// import { Header, Body, Footer, DayPicker, TransactionInput } from '.';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Container } from '.';
import { authOperations } from '../redux/auth';

const HomeView = lazy(() =>
  import('../views/HomePage' /* webpackChunkName: "login-page" */),
);

const LoginView = lazy(() =>
  import('../views/LoginPage' /* webpackChunkName: "login-page" */),
);

const RegisterView = lazy(() =>
  import('../views/RegisterPage' /* webpackChunkName: "register-page" */),
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
    <Container>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomeView />
              </PrivateRoute>
            }
          />

          <Route
            path="/login"
            element={
              <GoHome>
                <LoginView />
              </GoHome>
            }
          />

          <Route
            path="/register"
            element={
              <GoHome>
                <RegisterView />
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
  );
}

export default App;
