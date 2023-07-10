import { Navigate } from 'react-router-dom';
import useAuth from 'hooks/use-auth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  console.log(isLoggedIn, isRefreshing, shouldRedirect);

  console.log('Private route', Component.type.name);

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
