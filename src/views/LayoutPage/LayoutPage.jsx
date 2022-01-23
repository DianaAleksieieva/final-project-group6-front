import { Outlet } from 'react-router-dom';
import { Balance, Header } from '../../components';

export default function LayoutPage({
  month,
  year,
  onIncrement,
  onDecrement,
  active,
  stateDashboardButton,
}) {
  return (
    <>
      <Header />
      <Balance
        month={month}
        year={year}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        active={active}
        stateDashboardButton={stateDashboardButton}
      />
      <Outlet />
    </>
  );
}
