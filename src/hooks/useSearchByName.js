import { useSelector } from 'react-redux';
import {
  selectSearchByNameResult,
  selectSearchByNameQuery,
  selectSearchByNameError,
} from 'redux/Recipes/searchByName/selectors';

const useSearchByName = () => {
  const isLoading = useSelector(selectMainPageIsLoading);
  const isError = useSelector(selectMainPageError);
  const searchByName = useSelector(selectSearchByNameResult);

  return {
    isLoading,
    isError,
    searchByName,
  };
};

export default useSearchByName;
