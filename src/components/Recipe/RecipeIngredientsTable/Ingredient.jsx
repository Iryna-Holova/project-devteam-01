// import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToShoppingListV2Thunk,
  delFromShoppingListV2Thunk,
} from 'redux/ShoppingListV2/operations';
import { selectIsInShoppingList } from 'redux/ShoppingListV2/selectors';

export const Ingredient = ({ id, img, name, mesure, recipeId }) => {
  const dispatch = useDispatch();
  const isInShoppingList = useSelector(state =>
    selectIsInShoppingList(state, id, recipeId)
  );
  //const [isInSPL, setInSPL] = useState(isInShoppingList);

  //console.log(id, img, name, mesure, recipeId);

  const handleShoppingListButton = () => {
    console.log(isInShoppingList);
    if (isInShoppingList)
      dispatch(delFromShoppingListV2Thunk({ recipeId, id }));
    else dispatch(addToShoppingListV2Thunk({ recipeId, id, mesure }));
    //setInSPL(!isInSPL);
  };

  return (
    <li>
      <div>
        <img src={img} loading="lazy" alt={name} />
      </div>
      <div>{name}</div>
      <div>
        <span>{mesure}</span>
      </div>
      <div>
        <button onClick={handleShoppingListButton}>
          {isInShoppingList ? '1' : '0'}
        </button>
      </div>
    </li>
  );
};
