import React from 'react';
import IngredientsShoppingList from '../components/ShoppingList/IngredientsShoppingList/IngredientsShoppingList';
import { Container } from '../components/ShoppingList/IngredientsShoppingList/IngredientsShoppingList.styled';

import MainTitle from "components/MainTitle/MainTitle";

const ShoppingList = () => {
     return (
    <div>
      <Container> 
      <MainTitle>Shopping List</MainTitle>
        <IngredientsShoppingList />
      </Container>
    </div>
  );
}

export default ShoppingList;