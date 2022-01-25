import Dashboard from '../../components/Dashboard';
import { authOperations } from '../../redux/auth';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


function HomePage({
  active,
  changeActiveState,
  stateDashboardButton,
  changestateDashboardButton,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Dashboard
        active={active}
        changeActiveState={changeActiveState}
        stateDashboardButton={stateDashboardButton}
        changestateDashboardButton={changestateDashboardButton}
      />
    </>
  );
}

export default HomePage;
