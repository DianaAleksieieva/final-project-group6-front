import PrivateRoute from '../helpers/routes/PrivateRoute';
import GoHome from '../helpers/routes/GoHome';
import { lazy, Suspense, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation, Navigate} from 'react-router-dom';
import { Container } from '.';
import { authOperations, authSelectors } from '../redux/auth';

// import css from './App.module.css';
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

const RegisterView = lazy(() =>
  import('../views/RegisterPage' /* webpackChunkName: "register-page" */),
);

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  if (location.search) {
    const token = location.search.slice(1, location.search.length);
    dispatch(authOperations.googleIn(token))
     if (isLoggedIn === true) {
    return <Navigate to='/'/>
  };
}

  return (

    <Container>
      <Suspense fallback={<h1 style={{ textAlign: 'center' }}>Loading ...</h1>}>
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
