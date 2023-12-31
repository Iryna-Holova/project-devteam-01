import { useSelector } from 'react-redux';
import {
  selectFavRecipes,
  selectFavRecipesTotal,
  selectFavIsLoading,
  selectFavError,
  selectFavStatus,
  selectFavPage,
  selectFavPages,
  selectFavLimit,
  selectisDeleting,
} from 'redux/Recipes/favorite/selectors';

const useFavorite = () => {
  const isLoading = useSelector(selectFavIsLoading);
  const Error = useSelector(selectFavError);

  const favorite = useSelector(selectFavRecipes);
  const page = useSelector(selectFavPage);
  const total = useSelector(selectFavRecipesTotal);
  const pages = useSelector(selectFavPages);
  const limit = useSelector(selectFavLimit);
  const status = useSelector(selectFavStatus);
  const isDeleting = useSelector(selectisDeleting);

  return {
    isLoading,
    Error,
    favorite,
    page,
    total,
    pages,
    limit,
    status,
    isDeleting,
  };
};

export default useFavorite;
