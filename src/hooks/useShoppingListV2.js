import { useSelector } from 'react-redux';
import {
  selectIsInShoppingList,
  selectShoppingList,
  selectStatus,
  selectError,
  selectIsDeleting,
} from 'redux/ShoppingListV2/selectors';

const useShoppingListV2 = () => {
  const isInShoppingList = useSelector(selectIsInShoppingList);
  const shoppingList = useSelector(selectShoppingList);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const isDeleting = useSelector(selectIsDeleting);

  return {
    isInShoppingList,
    shoppingList,
    status,
    error,
    isDeleting,
  };
};

export default useShoppingListV2;
