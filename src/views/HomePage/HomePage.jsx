import Dashboard from '../../components/Dashboard';

function HomePage({
  active,
  changeActiveState,
  stateDashboardButton,
  changestateDashboardButton,
}) {
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
