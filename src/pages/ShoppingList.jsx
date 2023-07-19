import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  EmptyListImage,
  EmptyListText,
} from '../components/ShoppingList/IngredientsShoppinglist.styled';
import MainTitle from '../components/MainTitle/MainTitle';
import IngredientsShoppingList from '../components/ShoppingList/IngredientsShoppingList';
import { getShoppingListV2Thunk } from 'redux/ShoppingListV2/operations';
import useShoppingListV2 from 'hooks/useShoppingListV2';
import { Loader } from 'components/loader/loader';
import { IDLE, PENDING, REJECTED, RESOLVED } from 'utils/constants';
import emptyListImage from '../assets/images/empty-img.png';

import { clearError } from 'redux/ShoppingListV2/slice';
//import { fetchIngredients } from '../redux/ShoppingList/operations';

const ShoppingList = () => {
  const dispatch = useDispatch();
  //const ingredients = useSelector(state => state.shoppingList.ingredients);
  const { shoppingList, status, isDeleting } = useShoppingListV2();

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  useEffect(() => {
    if (shoppingList.length === 0) dispatch(getShoppingListV2Thunk());
  }, [dispatch, shoppingList]);

  // useEffect(() => {
  //   dispatch(fetchIngredients());
  // }, [dispatch]);

  return (
    <div>
      <MainTitle>Shopping List</MainTitle>
      <Container>
        {status === PENDING && !isDeleting && <Loader />}
        {/* <IngredientsShoppingList ingredients={ingredients} /> */}
        {(status === IDLE ||
          status === RESOLVED ||
          (status === PENDING && isDeleting)) && <IngredientsShoppingList />}
        {status !== PENDING ||
          ((status === REJECTED || shoppingList.length === 0) && (
            <div>
              <EmptyListImage src={emptyListImage} alt="Empty List" />
              <EmptyListText>Shopping list is empty</EmptyListText>
            </div>
          ))}
      </Container>
    </div>
  );
};

export default ShoppingList;
