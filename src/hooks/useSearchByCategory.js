import { useSelector } from 'react-redux';
import {
  selectSearchByCategoryResult,
  selectSearchByCategoryQuery,
  selectSearchByCategoryError,
  selectSearchByCategoryLoading,
  selectSearchByCategoryLimit,
  selectSearchByCategoryPages,
  selectSearchByCategoryTotal,
  selectSearchByCategoryPage,
} from 'redux/Recipes/searchByCategory/selectors';

const useSearchByCategory = () => {
  const isLoading = useSelector(selectSearchByCategoryLoading);
  const isError = useSelector(selectSearchByCategoryError);
  const query = useSelector(selectSearchByCategoryQuery);
  const data = useSelector(selectSearchByCategoryResult);

  const page = useSelector(selectSearchByCategoryPage);
  const total = useSelector(selectSearchByCategoryTotal);
  const pages = useSelector(selectSearchByCategoryPages);
  const limit = useSelector(selectSearchByCategoryLimit);
  // const queryParams = useSelector(selectSearchByCategoryQueryParams);

  return {
    isLoading,
    isError,
    data,
    query,
    page,
    total,
    pages,
    limit,
  };
};

export default useSearchByCategory;
