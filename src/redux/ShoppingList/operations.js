import { createAsyncThunk } from '@reduxjs/toolkit';
import shoppingListAPI from '../../services/api/recipes-api';

// Action для загрузки ингредиентов
export const fetchIngredients = createAsyncThunk(
  'shoppingList/fetchIngredients',
  async () => {
    const response = await shoppingListAPI.getIngredients();
    return response.data.ingredients;
  }
);

// Action для удаления ингредиента
export const deleteIngredient = createAsyncThunk(
  'shoppingList/deleteIngredient',
  async (id) => {
    await shoppingListAPI.deleteIngredient(id);
    return id;
  }
);
