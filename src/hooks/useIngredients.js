import { useSelector } from 'react-redux';
import {
  selectIngredients,
  selectError,
  selectStatus,
  selectLoading,
} from 'redux/Ingredients/selectors';

const useIngredients = () => {
  const ingredients = useSelector(selectIngredients);
  const isError = useSelector(selectError);
  const status = useSelector(selectStatus);
  const isLoading = useSelector(selectLoading);

  return {
    ingredients,
    isError,
    status,
    isLoading,
  };
};

export default useIngredients;
