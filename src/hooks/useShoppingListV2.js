import { useSelector } from 'react-redux';
import {
  selectIsInShoppingList,
  selectShoppingList,
  selectStatus,
  selectError,
  selectIsDeleting,
  selectCountInShoppingListByRecipeId,
} from 'redux/ShoppingListV2/selectors';

const useShoppingListV2 = () => {
  const isInShoppingList = useSelector(selectIsInShoppingList);
  const shoppingList = useSelector(selectShoppingList);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const isDeleting = useSelector(selectIsDeleting);
  const countInShoppingList = useSelector(selectCountInShoppingListByRecipeId);

  return {
    isInShoppingList,
    shoppingList,
    status,
    error,
    isDeleting,
    countInShoppingList,
  };
};

export default useShoppingListV2;
