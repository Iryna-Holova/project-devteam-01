import React, { useEffect, useState } from 'react';
import ingredientsData from '../data/ingredients';
import IngredientsShoppingList from '../components/ShoppingList/IngredientsShoppingList';
import { Container } from '../components/ShoppingList/IngredientsShoppinglist.styled';
import MainTitle from '../components/MainTitle/MainTitle';

const ShoppingList = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIngredients(ingredientsData.slice(0, 5));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleDelete = (id) => {
    const updatedIngredients = ingredients.filter((ingredient) => ingredient._id.$oid !== id);
    setIngredients(updatedIngredients);
  };

  return (
    <div>
       <MainTitle>Shopping List</MainTitle>
      <Container> 
        <IngredientsShoppingList ingredients={ingredients} onDelete={handleDelete} />
      </Container>
    </div>
  );
};

export default ShoppingList;