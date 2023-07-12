import React from 'react';
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
} from './IngredientsShoppinglist.styled';

import removeIcon from '../../assets/X.png';

const IngredientsShoppingList = ({ ingredients, onDelete }) => {
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
              <RemoveButton onClick={() => onDelete(ingredient._id.$oid)}>
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
