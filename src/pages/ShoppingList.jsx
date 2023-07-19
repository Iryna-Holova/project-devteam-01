import React, { useEffect, useState } from 'react';
import ingredientsData from '../data/ingredients';
import IngredientsShoppingList from '../components/ShoppingList/IngredientsShoppingList';
import { Container } from '../components/ShoppingList/IngredientsShoppinglist.styled';
import MainTitle from '../components/MainTitle/MainTitle';
import useShoppingListV2 from 'hooks/useShoppingListV2';

const ShoppingList = () => {
  const [ingredients, setIngredients] = useState([]);
  const { shoppingList } = useShoppingListV2();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIngredients(ingredientsData.slice(0, 5));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log(shoppingList);
  }, [shoppingList]);

  const handleDelete = id => {
    const updatedIngredients = ingredients.filter(
      ingredient => ingredient._id.$oid !== id
    );
    setIngredients(updatedIngredients);
  };

  return (
    <div>
      <MainTitle>Shopping List</MainTitle>
      <Container>
        <IngredientsShoppingList
          ingredients={ingredients}
          onDelete={handleDelete}
        />
      </Container>
    </div>
  );
};

export default ShoppingList;
