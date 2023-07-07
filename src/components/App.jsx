import { Routes, Route } from 'react-router-dom';

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
  return (
    <Routes>
      <Route path="/start" element={<Start />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/" element={<SharedLayout />}>
        <Route path="main" element={<Main />} />
        <Route path="categories/:categoryName" element={<Categories />} />
        <Route path="add" element={<AddRecipe />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="recipe/:recipeId" element={<Recipe />} />
        <Route path="my" element={<MyRecipes />} />
        <Route path="search" element={<Search />} />
        <Route path="shopping-list" element={<ShoppingList />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
