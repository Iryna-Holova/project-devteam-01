//import { Navigate } from 'react-router-dom';
// import useAuth from 'hooks/use-auth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // const { isLoggedIn, isRefreshing } = useAuth();
  //const shouldRedirect = !isLoggedIn && !isRefreshing;
  //console.log(isLoggedIn, isRefreshing, shouldRedirect);
  // console.log('PrivateRoute:', Component.type.name, isLoggedIn, isRefreshing);

  //return isLoggedIn ? Component : <Navigate to={redirectTo} />;
  return Component;

  // return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  // return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};
