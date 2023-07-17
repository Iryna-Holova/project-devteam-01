import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from '../components/ShoppingList/IngredientsShoppinglist.styled';
import MainTitle from '../components/MainTitle/MainTitle';
import IngredientsShoppingList from '../components/ShoppingList/IngredientsShoppingList';
import { fetchIngredients, deleteIngredient } from '../redux/ShoppingList/operations';

const ShoppingList = ({ ingredients, fetchIngredients, deleteIngredient }) => {
  useEffect(() => {
    fetchIngredients();
  }, [fetchIngredients]);

  const handleDelete = (id) => {
    deleteIngredient(id);
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

const mapStateToProps = (state) => ({
  ingredients: state.shoppingList.ingredients,
});

const mapDispatchToProps = {
  fetchIngredients,
  deleteIngredient,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
