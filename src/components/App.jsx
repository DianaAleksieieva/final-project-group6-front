import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route, Routes } from 'react-router-dom';

// import HomeView from '../views/HomePage/HomePage';
// import LoginView from '../views/LoginPage/LoginPage';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';
// import { Container, Header, Body, Footer, DayPicker, Droplist } from '.';
import { Container } from '.';
import { authOperations } from '../redux/auth';

const HomeView = lazy(() =>
  import('../views/HomePage/HomePage' /* webpackChunkName: "login-page" */),
);

const LoginView = lazy(() =>
  import('../views/LoginPage/LoginPage' /* webpackChunkName: "login-page" */),
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Suspense fallback={<>...</>}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/login" element={<LoginView />} />

          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </Container>

    // Вариант со старым синтаксисом

    // <Container>
    //   {/* <Suspense fallback={<Spinner />}></Suspense> */}
    //   <Switch>
    //     <PrivateRoute exact path="/" redirectTo="/login">
    //       <HomePage />
    //     </PrivateRoute>

    //     <PublicRoute path="/login" restricted redirectTo="/">
    //       <LoginPage />
    //     </PublicRoute>
    //     {/* <Route path="*" element={<NotFound />} /> */}
    //   </Switch>
    // </Container>

    // Что тут было

    // <div className={css.app}>
    //   <div className={css.container}>
    //     <Header />
    //     <Body />
    //     {/* <DayPicker /> */}
    //     {/* <Droplist /> */}
    //     <Footer />
    //   </div>
    // </div>
  );
}

export default App;
