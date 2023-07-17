import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

import removeIcon from '../../assets/images/X.png';
import emptyListImage from '../../assets/images/empty-img.png';
import { deleteIngredient } from '../../redux/ShoppingList/operations';

const IngredientsShoppingList = ({ onDelete }) => {
  const dispatch = useDispatch();
  const ingredients = useSelector((state) => state.shoppingList.ingredients);

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
                <QuantityIndicator>{ingredient.quantity}</QuantityIndicator>
              </IngredientQuantity>
              <RemoveButton onClick={() => dispatch(deleteIngredient(ingredient._id.$oid))}>
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
