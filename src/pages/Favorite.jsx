import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  getFavoriteRecipesThunk,
  removeFromFavoriteRecipesThunk,
} from 'redux/Recipes/favorite/operations';
import useFavorite from 'hooks/useFavorite';
import { PENDING } from 'utils/constants';

import MainTitle from 'components/MainTitle/MainTitle';
import { RecipesList } from 'components/RecipesList/RecipesList';
import { Loader } from 'components/loader/loader';
import Pagination from 'components/Pagination/Pagination';
import { setPage } from 'redux/Recipes/favorite/slice';

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
  };

  const handlePageChange = pageNumber => {
    dispatch(setPage(pageNumber));
  };

  return (
    <>
      <MainTitle>Favorites</MainTitle>
      {status === PENDING && !isDeleting ? (
        <Loader />
      ) : (
        <>
          {!favorite.length ? (
            <p>No recipes...</p>
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
