import { useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';

import Modal from 'components/Modal/Modal';
import Ingredient from './Ingredient';

import {
  TableBody,
  TableHead,
  ToggleShoppingList,
} from './IngredientsTable.styled';
import useShoppingListV2 from 'hooks/useShoppingListV2';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToShoppingListV2Thunk,
  delFromShoppingListV2Thunk,
} from 'redux/ShoppingListV2/operations';
import { selectCountInShoppingListByRecipeId } from 'redux/ShoppingListV2/selectors';

const IngredientsTable = ({ ingredients, recipeId, recipe }) => {
  const [showModal, setShowModal] = useState(false);
  const [ingredient, setIngredient] = useState({});
  const { shoppingList } = useShoppingListV2();
  const dispatch = useDispatch();

  const [totalIngredients] = useState(ingredients ? ingredients.length : 0);

  const countInShoppingList = useSelector(state =>
    selectCountInShoppingListByRecipeId(state, recipeId)
  );

  const openModal = (desc, name) => {
    setShowModal(true);
    setIngredient({ desc, name });
  };

  const handleAddAllToShoppingList = async () => {
    if (!ingredients) return;

    for (let i = 0; i < ingredients.length; i += 1) {
      const index = shoppingList?.findIndex(
        ({ _id }) => _id === ingredients[i].id
      );
      if (index >= 0) {
        const recipeIndex = shoppingList[index]?.measures?.findIndex(
          ({ recipeId: recId }) => recId === recipeId
        );

        if (recipeIndex < 0) {
          dispatch(
            addToShoppingListV2Thunk({
              recipeId,
              id: ingredients[i].id,
              measure: ingredients[i].mesure,
              title: recipe.title,
              description: recipe.description,
              thumb: recipe.thumb,
              name: ingredients[i].name,
              img: ingredients[i].img,
              desc: ingredients[i].desc,
            })
          );
        }
      } else {
        dispatch(
          addToShoppingListV2Thunk({
            recipeId,
            id: ingredients[i].id,
            measure: ingredients[i].mesure,
            title: recipe.title,
            description: recipe.description,
            thumb: recipe.thumb,
            name: ingredients[i].name,
            img: ingredients[i].img,
            desc: ingredients[i].desc,
          })
        );
      }
    }
  };

  const handleDelAllFromShoppingList = async () => {
    if (!ingredients) return;

    for (let i = 0; i < ingredients.length; i += 1) {
      const index = shoppingList?.findIndex(
        ({ _id }) => _id === ingredients[i].id
      );
      if (index >= 0) {
        const recipeIndex = shoppingList[index]?.measures?.findIndex(
          ({ recipeId: recId }) => recId === recipeId
        );

        if (recipeIndex >= 0) {
          dispatch(
            delFromShoppingListV2Thunk({
              recipeId,
              id: ingredients[i].id,
              measure: ingredients[i].mesure,
            })
          );
        }
      }
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <TableHead>
        <div>Ingredients</div>
        <div>
          {countInShoppingList}/{totalIngredients}
        </div>
        <div>Number</div>
        <div>
          Add to list
          <ToggleShoppingList
            onClick={handleAddAllToShoppingList}
            style={{ backgroundColor: 'var(--color-accent-secondary)' }}
          >
            {false ? <BsCheckLg /> : ' '}
          </ToggleShoppingList>
          <ToggleShoppingList
            onClick={handleDelAllFromShoppingList}
            style={{ backgroundColor: 'var(--color-accent-secondary)' }}
          >
            {false ? <BsCheckLg /> : ' '}
          </ToggleShoppingList>
        </div>
      </TableHead>
      <TableBody>
        {ingredients.map(({ id, img, name, mesure, desc }) => {
          return (
            <Ingredient
              key={id}
              id={id}
              img={img}
              name={name}
              measure={mesure}
              recipeId={recipeId}
              recipe={recipe}
              desc={desc}
              openModal={openModal}
            />
          );
        })}
      </TableBody>
      <Modal
        title={ingredient.name}
        openState={showModal}
        onModalClose={() => setShowModal(false)}
      >
        {ingredient.desc}
      </Modal>
    </div>
  );
};

export default IngredientsTable;
