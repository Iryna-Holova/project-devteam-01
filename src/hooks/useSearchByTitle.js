import { useSelector } from 'react-redux';
import {
  selectSearchByTitleResult,
  selectSearchByTitleQuery,
  selectSearchByTitleError,
  selectSearchByTitleLoading,
  selectSearchByTitleLimit,
  selectSearchByTitlePages,
  selectSearchByTitleTotal,
  selectSearchByTitlePage,
  // selectSearchByTitleQueryParams,
} from 'redux/Recipes/searchByTitle/selectors';

const useSearchByTitle = () => {
  const isLoading = useSelector(selectSearchByTitleLoading);
  const isError = useSelector(selectSearchByTitleError);
  const query = useSelector(selectSearchByTitleQuery);
  const data = useSelector(selectSearchByTitleResult);

  const page = useSelector(selectSearchByTitlePage);
  const total = useSelector(selectSearchByTitleTotal);
  const pages = useSelector(selectSearchByTitlePages);
  const limit = useSelector(selectSearchByTitleLimit);
  // const queryParams = useSelector(selectSearchByTitleQueryParams);

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

export default useSearchByTitle;
