import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import useAuth from 'hooks/use-auth';

import Main from 'pages/Main';
import Register from 'pages/Register';
import SharedLayout from 'pages/SharedLayout';
import Signin from 'pages/Signin';
import Start from 'pages/Start';
import Categories from 'pages/Categories';
import AddRecipe from 'pages/AddRecipe';
import Favorite from 'pages/Favorite';
import Recipe from 'pages/Recipe';
import MyRecipes from 'pages/MyRecipes';
import Search from 'pages/Search';
import ShoppingList from 'pages/ShoppingList';
import NotFound from 'pages/NotFound';
import Verify from 'pages/Verify';
import Test from 'pages/Test';
import { getMedia } from 'utils/getMedia';
import { setDevice } from 'redux/App/slice';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn, token } = useAuth;

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
    if (!isLoggedIn || token !== null) {
      //console.log('dispatch refreshing');
      dispatch(refreshUser());
    }
  }, [dispatch, isLoggedIn, token]);

  // if (isRefreshing) {
  //   console.log('refreshing');
  //   return <b> Refreshing user...</b>;
  // }

  return (
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
      {!isRefreshing} && (
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={<PrivateRoute redirectTo="/start" component={<Main />} />}
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
            <PrivateRoute redirectTo="/start" component={<Favorite />}>
              <Favorite />
            </PrivateRoute>
          }
        />
        <Route
          path="recipe/:recipeId"
          element={<PrivateRoute redirectTo="/start" component={<Recipe />} />}
        />
        <Route
          path="my"
          element={
            <PrivateRoute redirectTo="/start" component={<MyRecipes />} />
          }
        />
        <Route
          path="search"
          element={<PrivateRoute redirectTo="/start" component={<Search />} />}
        />
        <Route
          path="shopping-list"
          element={
            <PrivateRoute redirectTo="/start" component={<ShoppingList />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
      )
      <Route
        path="/test"
        element={<RestrictedRoute redirectTo="/" component={<Test />} />}
      />
    </Routes>
  );
};
