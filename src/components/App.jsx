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

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route
        path="/start"
        element={<RestrictedRoute redirectTo="/main" component={<Start />} />}
      />
      <Route
        path="/register"
        element={
          <RestrictedRoute redirectTo="/main" component={<Register />} />
        }
      />
      <Route
        path="/signin"
        element={<RestrictedRoute redirectTo="/main" component={<Signin />} />}
      />
      <Route
        path="/"
        element={
          <PrivateRoute redirectTo="/start" component={<SharedLayout />} />
        }
      >
        <Route
          path="main"
          element={<PrivateRoute redirectTo="/start" component={<Main />} />}
        />
        <Route
          path="categories/:categoryName"
          element={
            <PrivateRoute redirectTo="/start" component={<Categories />} />
          }
        />
        <Route
          path="add"
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
    </Routes>
  );
};
