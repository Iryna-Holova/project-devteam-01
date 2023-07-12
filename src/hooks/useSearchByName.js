import { useSelector } from 'react-redux';
import {
  selectSearchByNameResult,
  selectSearchByNameQuery,
  selectSearchByNameError,
  selectSearchByNameLoading,
  selectSearchByNameLimit,
  selectSearchByNamePages,
  selectSearchByNameTotal,
  selectSearchByNamePage,
  // selectSearchByNameQueryParams,
} from 'redux/Recipes/searchByName/selectors';

const useSearchByName = () => {
  const isLoading = useSelector(selectSearchByNameLoading);
  const isError = useSelector(selectSearchByNameError);
  const query = useSelector(selectSearchByNameQuery);
  const data = useSelector(selectSearchByNameResult);

  const page = useSelector(selectSearchByNamePage);
  const total = useSelector(selectSearchByNameTotal);
  const pages = useSelector(selectSearchByNamePages);
  const limit = useSelector(selectSearchByNameLimit);
  // const queryParams = useSelector(selectSearchByNameQueryParams);

  return {
    isLoading,
    isError,
    data,
    query,
    page,
    total,
    pages,
    limit,
    // queryParams,
  };
};

export default useSearchByName;
