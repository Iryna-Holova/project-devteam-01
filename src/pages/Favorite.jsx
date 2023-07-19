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

const Favorite = () => {
  const { status, favorite, page, limit } = useFavorite();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteRecipesThunk({ page, limit }));
  }, [dispatch, page, limit]);

  const handleRemoveClick = receptId => {
    dispatch(removeFromFavoriteRecipesThunk(receptId));
  };
  return (
    <>
      <MainTitle>Favorites</MainTitle>
      {status === PENDING ? (
        <Loader/>
      ) : (
        <>
          {!favorite.length ? (
            <p>No recipes...</p>
          ) : (
            <RecipesList data={favorite} removeRecipe={handleRemoveClick} />
          )}
        </>
      )}
    </>
  );
};

export default Favorite;
