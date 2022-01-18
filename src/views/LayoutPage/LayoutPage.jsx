import { Outlet } from 'react-router-dom'
import { Balance, Header } from '../../components'

export default function LayoutPage() {
  return (
    <>
      <Header />
      <Balance />
      <Outlet />
    </>
  )
}
