// import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToShoppingListV2Thunk,
  delFromShoppingListV2Thunk,
} from 'redux/ShoppingListV2/operations';
import { selectIsInShoppingList } from 'redux/ShoppingListV2/selectors';

export const Ingredient = ({
  id,
  img,
  name,
  measure,
  recipeId,
  recipe,
  desc,
}) => {
  const dispatch = useDispatch();
  const { title, description, thumb } = recipe;
  const isInShoppingList = useSelector(state =>
    selectIsInShoppingList(state, id, recipeId)
  );
  //const [isInSPL, setInSPL] = useState(isInShoppingList);

  //console.log(id, img, name, mesure, recipeId);

  const handleShoppingListButton = () => {
    console.log(isInShoppingList);
    if (isInShoppingList)
      dispatch(delFromShoppingListV2Thunk({ recipeId, id, measure }));
    else
      dispatch(
        addToShoppingListV2Thunk({
          recipeId,
          id,
          measure,
          title,
          description,
          thumb,
          name,
          img,
          desc,
        })
      );
    //setInSPL(!isInSPL);
  };
  return (
    <li>
      <div>
        <img src={img} loading="lazy" alt={name} />
      </div>
      <div>{name}</div>
      <div>
        {(measure && (measure !== ' ')) && (<span>{measure}</span>)}
      </div>
      <div>
        <button onClick={handleShoppingListButton}>
          {isInShoppingList ? '1' : '0'}
        </button>
      </div>
    </li>
  );
};
