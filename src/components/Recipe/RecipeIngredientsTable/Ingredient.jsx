import { useDispatch, useSelector } from 'react-redux';
import { BsCheck, BsCheckLg } from 'react-icons/bs';

import {
  addToShoppingListV2Thunk,
  delFromShoppingListV2Thunk,
} from 'redux/ShoppingListV2/operations';
import { selectIsInShoppingList } from 'redux/ShoppingListV2/selectors';
import { ToggleShoppingList } from './IngredientsTable.styled';
import noImage from '../../../assets/images/no-image-ingredient.webp';

const Ingredient = ({
  id,
  img,
  name,
  measure,
  recipeId,
  recipe,
  desc,
  openModal,
}) => {
  const dispatch = useDispatch();
  const { title, description, thumb } = recipe;
  const isInShoppingList = useSelector(state =>
    selectIsInShoppingList(state, id, recipeId)
  );
  //const [isInSPL, setInSPL] = useState(isInShoppingList);

  //console.log(id, img, name, mesure, recipeId);

  const handleShoppingListButton = () => {
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
        <img
          src={img || noImage}
          alt={name}
          loading="lazy"
          onError={({ target }) => {
            if (target.src !== noImage) {
              target.onerror = null;
              target.src = noImage;
            }
          }}
          onClick={() => openModal(desc, name)}
        />
      </div>
      <div>{name}</div>
      <div>{measure && measure !== ' ' && <span>{measure}</span>}</div>
      <div>
        <ToggleShoppingList onClick={handleShoppingListButton}>
          {isInShoppingList ? <BsCheckLg /> : ' '}
        </ToggleShoppingList>
      </div>
    </li>
  );
};

export default Ingredient;
