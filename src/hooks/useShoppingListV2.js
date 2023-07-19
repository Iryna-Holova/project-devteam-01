import { useSelector } from 'react-redux';
import {
  selectIsInShoppingList,
  selectShoppingList,
} from 'redux/ShoppingListV2/selectors';

const useShoppingListV2 = () => {
  const isInShoppingList = useSelector(selectIsInShoppingList);
  const shoppingList = useSelector(selectShoppingList);

  return {
    isInShoppingList,
    shoppingList,
  };
};

export default useShoppingListV2;
