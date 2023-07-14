import { useSelector } from 'react-redux';

import {
  selectOwnRecipesResult,
  selectOwnRecipesQuery,
  selectOwnRecipesError,
  selectOwnRecipesLoading,
  selectOwnRecipesLimit,
  selectOwnRecipesPages,
  selectOwnRecipesTotal,
  selectOwnRecipesPage,
  selectOwnRecipesStatus,
} from 'redux/Recipes/own/selectors';

const useOwnRecipes = () => {
  const isLoading = useSelector(selectOwnRecipesLoading);
  const isError = useSelector(selectOwnRecipesError);
  const query = useSelector(selectOwnRecipesQuery);
  const data = useSelector(selectOwnRecipesResult);

  const page = useSelector(selectOwnRecipesPage);
  const total = useSelector(selectOwnRecipesTotal);
  const pages = useSelector(selectOwnRecipesPages);
  const limit = useSelector(selectOwnRecipesLimit);
  const status = useSelector(selectOwnRecipesStatus);

  return {
    isLoading,
    isError,
    data,
    query,
    page,
    total,
    pages,
    limit,
    status,
  };
};

export default useOwnRecipes;
