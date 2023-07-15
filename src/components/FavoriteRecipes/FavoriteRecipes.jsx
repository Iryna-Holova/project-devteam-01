import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { RecipesList } from 'components/RecipesList/RecipesList';
// import {
//   getFavoriteRecipes,
//   removeFromFavorite,
// } from '../../redux/favoriteRecipes/favoriteRecipesOperations';
// import {
//   selectFavRecipes,
//   selectFavIsLoading,
//   selectFavRecipesCount,
// } from '../../redux/favoriteRecipes/favoriteRecipesSelectors';
import { FavoriteRecipesContainer } from './FavoriteRecipes.styled';

//import 'react-responsive-pagination/themes/minimal.css';

//import { scrollToTop } from '../utils/scrollToTop';
import {
  getFavoriteRecipesThunk,
  removeFromFavoriteRecipesThunk,
} from 'redux/Recipes/favorite/operations';
import useFavorite from 'hooks/useFavorite';
import { PENDING } from 'utils/constants';

export const FavoriteRecipes = () => {
  const [paginationPage, setPaginationPage] = useState(1);
  //const [per_page] = useState(10);

  //const data = useSelector(selectFavRecipes);
  // const total = useSelector(selectFavRecipesCount);
  //const pagesCount = Math.trunc(total / per_page);
  //const isLoading = useSelector(selectFavIsLoading);

  const { status, favorite, page, limit } = useFavorite();

  const dispatch = useDispatch();

  const handleRemoveClick = receptId => {
    console.log(receptId);
    dispatch(removeFromFavoriteRecipesThunk(receptId));
  };

  useEffect(() => {
    // dispatch(getFavoriteRecipes({ page: paginationPage, pageSize: per_page }));
    dispatch(getFavoriteRecipesThunk({ page, limit }));
  }, [dispatch, page, limit]);

  // const handlePaginationClick = event => {
  //   scrollToTop();
  //   setPaginationPage(event);
  // };

  return (
    <FavoriteRecipesContainer id="favoriteRecipesContainer">
      {favorite?.length > 0 ? (
        <>
          <RecipesList
            paginationPage={paginationPage}
            removeRecipe={handleRemoveClick}
            // data={data}
            data={favorite}
            // isLoading={isLoading}
            isLoading={status === PENDING}
          />
          <button onClick={() => setPaginationPage}>Page 2</button>
          {/* <Paginator
            parendContainerId="favoriteRecipesContainer"
            currentPage={paginationPage}
            pagesCout={pagesCount}
            onPaginate={handlePaginationClick}>
          </Paginator> */}
        </>
      ) : (
        <div>
          <img
            // src={placeholder}
            alt="error"
          />
          <p>We are sorry,</p>
          <p>You don't have any added recipes ...</p>
        </div>
      )}
    </FavoriteRecipesContainer>
  );
};
