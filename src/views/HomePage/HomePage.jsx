// import { useDispatch } from 'react-redux';
import Dashboard from '../../components/Dashboard';
// import { authSelectors } from '../../redux/auth';

function HomePage({
  active,
  changeActiveState,
  stateDashboardButton,
  changestateDashboardButton,
}) {
  // const dispatch = useDispatch()
  // console.log(getIsLoggedIn);
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
