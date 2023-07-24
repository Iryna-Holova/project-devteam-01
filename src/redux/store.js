import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { recipesReducer } from './Recipes/reducer';
import { categoriesReducer } from './Categories/slice';
import { appReducer } from './App/slice';
import { IngredientsReducer } from './Ingredients/slice';
import { shoppingListV2Reducer } from './ShoppingListV2/slice';
//import { searchByNameReducer } from './Recipes/searchByName/slice';
//import shoppingListReducer from './ShoppingList/slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const appPersistConfig = {
  key: 'app',
  storage,
  whitelist: ['theme'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    recipes: recipesReducer,
    categories: categoriesReducer,
    app: persistReducer(appPersistConfig, appReducer),
    ingredients: IngredientsReducer,
    //  shoppingList: shoppingListReducer,
    shoppingListV2: shoppingListV2Reducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
