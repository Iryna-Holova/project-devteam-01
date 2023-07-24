import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  getFavoriteRecipesThunk,
  removeFromFavoriteRecipesThunk,
} from 'redux/Recipes/favorite/operations';
import useFavorite from 'hooks/useFavorite';
import { PENDING, RESOLVED } from 'utils/constants';

import MainTitle from 'components/MainTitle/MainTitle';
import { RecipesList } from 'components/RecipesList/RecipesList';
import { Loader } from 'components/loader/loader';
import Pagination from 'components/Pagination/Pagination';
import { setPage } from 'redux/Recipes/favorite/slice';
import NoDataMessage from 'components/NoDataMessage/NoDataMessage';

const Favorite = () => {
  const { status, favorite, page, limit, isDeleting } = useFavorite();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getFavoriteRecipesThunk({ page, limit }));
  // }, [dispatch, page, limit]);

  useEffect(() => {
    dispatch(getFavoriteRecipesThunk({ limit: 99999 }));
  }, [dispatch]);

  const handleRemoveClick = receptId => {
    dispatch(removeFromFavoriteRecipesThunk(receptId));
    if (favorite.length === (page - 1) * 4 + 1) {
      dispatch(setPage(page - 1));
    }
  };

  const handlePageChange = pageNumber => {
    dispatch(setPage(pageNumber));
  };
  return (
    <>
      <MainTitle>Favorites</MainTitle>
      {status === PENDING ? (
        <Loader />
      ) : (
        <>
          {!favorite.length ? (
            <NoDataMessage>
              You haven't added your favorite recipes yet...
            </NoDataMessage>
          ) : (
            <>
              <RecipesList
                data={favorite.slice((page - 1) * limit, page * limit)}
                removeRecipe={handleRemoveClick}
              />
              <Pagination
                totalPages={
                  favorite?.length ? Math.ceil(favorite.length / limit) : 0
                }
                currentPage={page}
                onClick={handlePageChange}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Favorite;
