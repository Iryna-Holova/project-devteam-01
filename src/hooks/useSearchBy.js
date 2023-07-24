import { useSelector } from 'react-redux';
import {
  selectSearchByResult,
  selectSearchByQuery,
  selectSearchByError,
  selectSearchByLoading,
  selectSearchByLimit,
  selectSearchByPages,
  selectSearchByTotal,
  selectSearchByPage,
  selectSearchByMethod,
  selectSearchByStatus,
} from 'redux/Recipes/SearchBy/selectors';

const useSearchBy = () => {
  const isLoading = useSelector(selectSearchByLoading);
  const error = useSelector(selectSearchByError);
  const query = useSelector(selectSearchByQuery);
  const data = useSelector(selectSearchByResult);
  const recipes = useSelector(selectSearchByResult);
  const page = useSelector(selectSearchByPage);
  const total = useSelector(selectSearchByTotal);
  const pages = useSelector(selectSearchByPages);
  const limit = useSelector(selectSearchByLimit);
  const status = useSelector(selectSearchByStatus);
  const method = useSelector(selectSearchByMethod);

  return {
    isLoading,
    error,
    data,
    query,
    page,
    total,
    pages,
    limit,
    recipes,
    method,
    status,
  };
};

export default useSearchBy;
