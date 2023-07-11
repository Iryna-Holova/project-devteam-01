import React, { useEffect, useState } from 'react';
import ingredientsData from '../../../data/ingredients';
import {
  Container,
  HeaderContainer,
  Title,
  TitleN,
  IngredientsListContainer,
  IngredientItem,
  IngredientImage,
  IngredientDetails,
  IngredientName,
  IngredientQuantity,
  RemoveButton,
  QuantityIndicator,
} from './IngredientsShoppingList.styled';

import removeIcon from '../../../assets/X.png';

const IngredientsShoppingList = () => {
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
    <Container>
      <HeaderContainer>
        <Title>Products</Title>
        <TitleN>Number</TitleN>
        <Title>Remove</Title>
      </HeaderContainer>
      <IngredientsListContainer>
        {ingredients.map((ingredient) => (
          <IngredientItem key={ingredient._id.$oid}>
            <IngredientImage src={ingredient.img} alt={ingredient.name} />
            <IngredientName>{ingredient.name}</IngredientName>
            <IngredientDetails>
              <IngredientQuantity>
                <QuantityIndicator>10</QuantityIndicator>
              </IngredientQuantity>
              <RemoveButton onClick={() => handleDelete(ingredient._id.$oid)}>
               <img src={removeIcon} alt="Remove" className="remove-icon" />
              </RemoveButton>
            </IngredientDetails>
          </IngredientItem>
        ))}
      </IngredientsListContainer>
    </Container>
  );
};

export default IngredientsShoppingList;
