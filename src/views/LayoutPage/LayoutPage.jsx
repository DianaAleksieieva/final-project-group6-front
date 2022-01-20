import { Outlet } from 'react-router-dom';
import { Balance, Header } from '../../components';

export default function LayoutPage({ month, year, onIncrement, onDecrement }) {
  return (
    <>
      <Header />
      <Balance
        month={month}
        year={year}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
      <Outlet />
    </>
  );
}
