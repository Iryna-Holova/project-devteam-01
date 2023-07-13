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
  EmptyListImage,
  EmptyListText,
} from './IngredientsShoppinglist.styled';

import removeIcon from '../../assets/X.png';
import emptyListImage from '../../assets/images/empty-img.png';

const IngredientsShoppingList = ({ ingredients, onDelete }) => {
  if (ingredients.length === 0) {
    return (
      <Container>
        <EmptyListImage src={emptyListImage} alt="Empty List" />
        <EmptyListText>Shopping list is empty</EmptyListText>
      </Container>
    );
  }

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
