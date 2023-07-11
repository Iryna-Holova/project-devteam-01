import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RecipesList } from 'components/RecipesList/RecipesList';
import {
  getFavoriteRecipes,
  removeFromFavorite,
} from '../../redux/favoriteRecipes/favoriteRecipesOperations';
import {
  selectFavRecipes,
  selectFavIsLoading,
  selectFavRecipesCount,
} from '../../redux/favoriteRecipes/favoriteRecipesSelectors';
import { FavoriteRecipesContainer } from './FavoriteRecipes.styled';

//import 'react-responsive-pagination/themes/minimal.css';

import { scrollToTop } from '../utils/scrollToTop';

export const FavoriteRecipes = () => {
  const [paginationPage, setPaginationPage] = useState(1);
  const [per_page] = useState(10);

  const data = useSelector(selectFavRecipes);
  const total = useSelector(selectFavRecipesCount);
  const pagesCount = Math.trunc(total / per_page);
  const isLoading = useSelector(selectFavIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoriteRecipes({ page: paginationPage, pageSize: per_page }));
  }, [dispatch, paginationPage, per_page]);

  const handlePaginationClick = event => {
    scrollToTop();
    setPaginationPage(event);
  };

  return (
    <FavoriteRecipesContainer id="favoriteRecipesContainer">
      {data?.length > 0 ? (
        <>
          <RecipesList
            paginationPage={paginationPage}
            removeRecipe={removeFromFavorite}
            data={data}
            isLoading={isLoading}
          />
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
