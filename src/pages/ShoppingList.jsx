import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import MainTitle from '../components/MainTitle/MainTitle';
import IngredientsShoppingList from '../components/ShoppingList/IngredientsShoppingList';
import { getShoppingListV2Thunk } from 'redux/ShoppingListV2/operations';
import useShoppingListV2 from 'hooks/useShoppingListV2';
import { Loader } from 'components/loader/loader';
// import { IDLE, PENDING, RESOLVED } from 'utils/constants';

import { clearError } from 'redux/ShoppingListV2/slice';
import NoDataMessage from 'components/NoDataMessage/NoDataMessage';
//import { fetchIngredients } from '../redux/ShoppingList/operations';

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  //const ingredients = useSelector(state => state.shoppingList.ingredients);
  const {
    shoppingList,
    // status,
    // isDeleting,
    isLoading,
  } = useShoppingListV2();

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  // useEffect(() => {
  //   if (shoppingList.length === 0) dispatch(getShoppingListV2Thunk());
  // }, [dispatch, shoppingList]);

  useEffect(() => {
    if (isChecked) return;
    if (shoppingList.length === 0)
      Promise.all([dispatch(getShoppingListV2Thunk()), setIsChecked(true)]);
  }, [dispatch, shoppingList, isChecked]);

  // useEffect(() => {
  //   dispatch(fetchIngredients());
  // }, [dispatch]);

  return (
    <>
      <MainTitle>Shopping List</MainTitle>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!shoppingList.length ? (
            <NoDataMessage>Shopping list is empty...</NoDataMessage>
          ) : (
            <IngredientsShoppingList />
          )}
        </>
      )}
    </>
  );
};

export default ShoppingList;
