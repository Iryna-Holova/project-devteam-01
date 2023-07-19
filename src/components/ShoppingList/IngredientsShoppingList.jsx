import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdClear } from 'react-icons/md';
import { Loader } from '../loader/loader';
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

import emptyListImage from '../../assets/images/empty-img.png';
import {
  deleteIngredient,
  fetchIngredients,
} from '../../redux/ShoppingList/operations';

const IngredientsShoppingList = () => {
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.shoppingList.ingredients);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchIngredients())
      .then(() => setIsLoading(false))
      .catch(error => {
        setIsLoading(false);
        console.error('Error loading ingredients:', error);
      });
  }, [dispatch]);

  const onDelete = id => {
    dispatch(deleteIngredient(id));
  };

  return (
    <Container>
      <HeaderContainer>
        <Title>Products</Title>
        <TitleN>Number</TitleN>
        <Title>Remove</Title>
      </HeaderContainer>
      {isLoading ? (
        <Loader className="loader" />
      ) : ingredients.length === 0 ? (
        <div>
          <EmptyListImage src={emptyListImage} alt="Empty List" />
          <EmptyListText>Shopping list is empty</EmptyListText>
        </div>
      ) : (
        <IngredientsListContainer>
          {ingredients.map(ingredient => (
            <IngredientItem key={ingredient._id.$oid}>
              <IngredientImage src={ingredient.img} alt={ingredient.name} />
              <IngredientName>{ingredient.name}</IngredientName>
              <IngredientDetails>
                <IngredientQuantity>
                  <QuantityIndicator>{ingredient.quantity}</QuantityIndicator>
                </IngredientQuantity>
                <RemoveButton onClick={() => onDelete(ingredient._id.$oid)}>
                  <MdClear className="remove-icon" />
                </RemoveButton>
              </IngredientDetails>
            </IngredientItem>
          ))}
        </IngredientsListContainer>
      )}
    </Container>
  );
};

export default IngredientsShoppingList;
