import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setDevice } from 'redux/App/slice';
import { refreshUser } from 'redux/auth/operations';
import useAuth from 'hooks/use-auth';
import { getMedia } from 'utils/getMedia';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

import Test from 'pages/Test';

const Start = lazy(() => import('pages/Start'));
const Register = lazy(() => import('pages/Register'));
const Signin = lazy(() => import('pages/Signin'));
const SharedLayout = lazy(() => import('pages/SharedLayout'));
const Main = lazy(() => import('pages/Main'));
const Categories = lazy(() => import('pages/Categories/Categories'));
const AddRecipe = lazy(() => import('pages/AddRecipe'));
const Favorite = lazy(() => import('pages/Favorite'));
const Recipe = lazy(() => import('pages/Recipe'));
const MyRecipes = lazy(() => import('pages/MyRecipes'));
const Search = lazy(() => import('pages/Search'));
const ShoppingList = lazy(() => import('pages/ShoppingList'));
const NotFound = lazy(() => import('pages/NotFound'));
const Verify = lazy(() => import('pages/Verify'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn, token } = useAuth();

  useEffect(() => {
    const device = getMedia();
    dispatch(setDevice(device));

    const handlerOnWindowResize = () => {
      const device = getMedia();
      dispatch(setDevice(device));
    };
    const addHandler = () => {
      window.addEventListener('resize', handlerOnWindowResize);
    };

    addHandler();
    return () => {
      const removeHandler = () => {
        window.removeEventListener('resize', handlerOnWindowResize);
      };
      removeHandler();
    };
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn || token === null) return;

    dispatch(refreshUser());
  }, [dispatch, isLoggedIn, token]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Suspense fallback={<p>Suspense...</p>}>
      <Routes>
        <Route
          path="/start"
          element={<RestrictedRoute redirectTo="/" component={<Start />} />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/" component={<Register />} />}
        />
        <Route
          path="/signin"
          element={<RestrictedRoute redirectTo="/" component={<Signin />} />}
        />
        <Route
          path="/verify/:verificationToken"
          element={<RestrictedRoute redirectTo="/" component={<Verify />} />}
        />
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={<PrivateRoute redirectTo="/start" component={<Main />} />}
          />
          <Route
            path="categories/"
            element={
              <PrivateRoute
                redirectTo="/start"
                component={<Navigate to="/categories/beef" />}
              />
            }
          />
          <Route
            path="categories/:categoryName"
            element={
              <PrivateRoute redirectTo="/start" component={<Categories />} />
            }
          />
          <Route
            path="/add"
            element={
              <PrivateRoute redirectTo="/start" component={<AddRecipe />} />
            }
          />
          <Route
            path="favorite"
            element={
              <PrivateRoute redirectTo="/start" component={<Favorite />} />
            }
          />
          <Route
            path="recipe/:recipeId"
            element={
              <PrivateRoute redirectTo="/start" component={<Recipe />} />
            }
          />
          <Route
            path="my"
            element={
              <PrivateRoute redirectTo="/start" component={<MyRecipes />} />
            }
          />
          <Route
            path="search"
            element={
              <PrivateRoute redirectTo="/start" component={<Search />} />
            }
          />
          <Route
            path="shopping-list"
            element={
              <PrivateRoute redirectTo="/start" component={<ShoppingList />} />
            }
          />
          <Route
            path="*"
            element={
              <PrivateRoute redirectTo="/start" component={<NotFound />} />
            }
          />
        </Route>
        <Route
          path="/test"
          element={<RestrictedRoute redirectTo="/" component={<Test />} />}
        />
      </Routes>
    </Suspense>
  );
};
