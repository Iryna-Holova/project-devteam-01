import { Suspense, lazy, useCallback, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setDevice } from 'redux/App/slice';
import { refreshUser } from 'redux/auth/operations';
import useAuth from 'hooks/use-auth';
import { getMedia } from 'utils/getMedia';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

import Test from 'pages/Test';
import useApp from 'hooks/useApp';
import { setLimit as setFavoriteLimit } from 'redux/Recipes/favorite/slice';
import getPageLimit from 'utils/getPageLimit';
import { setLimit as setSearchByCategoryLimit } from 'redux/Recipes/searchByCategory/slice';
import { setLimit as setOwnLimit } from 'redux/Recipes/own/slice';
import { setLimit as setSearchByLimit } from 'redux/Recipes/SearchBy/slice';
import { Loader } from './loader/loader';

const Start = lazy(() => import('pages/Start/Start'));
const Register = lazy(() => import('pages/Register'));
const Signin = lazy(() => import('pages/Signin'));
const SharedLayout = lazy(() => import('pages/SharedLayout'));
const Main = lazy(() => import('pages/Main'));
const Categories = lazy(() => import('pages/Categories'));
const AddRecipe = lazy(() => import('pages/AddRecipe/AddRecipe'));
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
  const { device } = useApp();

  const handlerOnWindowResize = useCallback(() => {
    const currDevice = getMedia();
    if (device !== currDevice)
      Promise.all([
        dispatch(setDevice(currDevice)),
        dispatch(setFavoriteLimit(getPageLimit('favorite', currDevice))),
        dispatch(setSearchByCategoryLimit(getPageLimit('search', currDevice))),
        dispatch(setOwnLimit(getPageLimit('own', currDevice))),
        dispatch(setSearchByLimit(getPageLimit('search', currDevice))),
      ]);
  }, [device, dispatch]);

  useEffect(() => {
    const currDevice = getMedia();

    Promise.all([
      dispatch(setDevice(currDevice)),
      dispatch(setFavoriteLimit(getPageLimit('favorite', currDevice))),
      dispatch(setSearchByCategoryLimit(getPageLimit('search', currDevice))),
      dispatch(setOwnLimit(getPageLimit('own', currDevice))),
      dispatch(setSearchByLimit(getPageLimit('search', currDevice))),
    ]);

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
  }, [dispatch, handlerOnWindowResize]);

  useEffect(() => {
    if (isLoggedIn || token === null) return;

    dispatch(refreshUser());
  }, [dispatch, isLoggedIn, token]);

  return isRefreshing ? (
    <Loader className={'page'} />
  ) : (
    <Suspense fallback={<Loader className={'page'} />}>
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
            path="search/:searchQuery?"
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
