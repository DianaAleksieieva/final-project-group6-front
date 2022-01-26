import PrivateRoute from '../helpers/routes/PrivateRoute';
import GoHome from '../helpers/routes/GoHome';
import css from './App.module.css';
import Footer from './Footer';
import { Container, Loader } from '.';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';
import { lazy, Suspense, useState, useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';

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
  const location = useLocation();
  const dispatch = useDispatch();

  let date = new Date();
  let selectedMonth = date.getMonth() + 1;
  let selectedYear = date.getFullYear();

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

  const [month, setMonth] = useState(selectedMonth);
  const [year, setYear] = useState(selectedYear);
  const [active, setActive] = useState('Расход');
  const [stateDashboardButton, setStateDashboardButton] = useState(true);

  const onIncrement = (month, year) => {
    if (month < 12) {
      setMonth(month + 1);
    }
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    }
  };

  const onDecrement = (month, year) => {
    if (month > 1) {
      setMonth(month - 1);
    }
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    }
  };

  const changeActiveState = data => {
    setActive(data);
    setStateDashboardButton(false);
  };

  const changestateDashboardButton = data => {
    setStateDashboardButton(data);
  };

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(authOperations.fetchCurrentUser());
    }
  }, [dispatch, isLoggedIn]);

  if (location.search) {
    const token = location.search.slice(1, location.search.length);
    dispatch(authOperations.googleIn(token));
    return <Navigate to="/" />;
  }

  return (
    <>
      {location.pathname === '/' || location.pathname === '/statistics' ? (
        <div className={css.backgroundLogin}></div>
      ) : (
        <div className={css.background}></div>
      )}
      <Container>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <LayoutView
                    month={month}
                    year={year}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    active={active}
                    stateDashboardButton={stateDashboardButton}
                  />
                </PrivateRoute>
              }
            >
              <Route
                index
                element={
                  <HomeView
                    active={active}
                    changeActiveState={changeActiveState}
                    stateDashboardButton={stateDashboardButton}
                    changestateDashboardButton={changestateDashboardButton}
                  />
                }
              />
              <Route
                path="/statistics"
                element={<StatisticsView month={month} year={year} />}
              />
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

      {location.pathname === '/' || location.pathname === '/statistics' ? (
        <div className={css.wrapperBackgroundStatistic}>
          <div className={css.backgroundStatistic}></div>
        </div>
      ) : (
        <div className={css.backgroundCabbage}>
          <div className={css.cabbageSmall}></div>
        </div>
      )}
      {isLoggedIn && <Footer />}
    </>
  );
}

export default App;
