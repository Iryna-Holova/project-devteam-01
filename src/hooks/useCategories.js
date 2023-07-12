import { useSelector } from 'react-redux';
import {
  selectCategories,
  selectCategoriesError,
  selectCategoriesLoading,
} from 'redux/Categories/selectors';

const useCategories = () => {
  const categories = useSelector(selectCategories);
  const isError = useSelector(selectCategoriesError);
  const isLoading = useSelector(selectCategoriesLoading);

  return {
    isLoading,
    isError,
    categories,
  };
};

export default useCategories;
