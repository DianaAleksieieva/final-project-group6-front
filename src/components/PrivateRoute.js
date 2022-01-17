import { useSelector } from 'react-redux';
import { Route, useNavigate } from 'react-router-dom';
import { authSelectors } from '../redux/auth';

export default function PrivateRoute({
  path,
  redirectTo,
  ...routeProps
}) {
  const navigate = useNavigate()
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? navigate({path}) : navigate({ redirectTo })}
    </Route>
  );
}
