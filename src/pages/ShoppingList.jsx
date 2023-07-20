import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
import { IDLE, PENDING, RESOLVED } from 'utils/constants';
import emptyListImage from '../assets/images/empty-img.png';

import { clearError } from 'redux/ShoppingListV2/slice';
//import { fetchIngredients } from '../redux/ShoppingList/operations';

const ShoppingList = () => {
  const dispatch = useDispatch();
  //const ingredients = useSelector(state => state.shoppingList.ingredients);
  const { shoppingList, status, isDeleting, isLoading } = useShoppingListV2();

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
        {/* {status === PENDING && !isDeleting && <Loader />} */}
        {isLoading && <Loader />}

        {/* <IngredientsShoppingList ingredients={ingredients} /> */}
        {(status === IDLE ||
          status === RESOLVED ||
          (status === PENDING && isDeleting)) && <IngredientsShoppingList />}
        {shoppingList.length === 0 && status !== PENDING && (
          <div>
            <EmptyListImage src={emptyListImage} alt="Empty List" />
            <EmptyListText>Shopping list is empty</EmptyListText>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ShoppingList;
