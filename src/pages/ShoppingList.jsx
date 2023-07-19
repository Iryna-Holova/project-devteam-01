import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../components/ShoppingList/IngredientsShoppinglist.styled';
import MainTitle from '../components/MainTitle/MainTitle';
import IngredientsShoppingList from '../components/ShoppingList/IngredientsShoppingList';
import { fetchIngredients } from '../redux/ShoppingList/operations';

const ShoppingList = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.shoppingList.ingredients);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <div>
      <MainTitle>Shopping List</MainTitle>
      <Container>
        <IngredientsShoppingList ingredients={ingredients} />
      </Container>
    </div>
  );
};

export default ShoppingList;
