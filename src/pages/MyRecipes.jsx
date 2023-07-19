//import useOwnRecipes from 'hooks/useOwnRecipes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getOwnRecipesThunk } from 'redux/Recipes/own/operations';
import useOwnRecipes from 'hooks/useOwnRecipes';

import MainTitle from 'components/MainTitle/MainTitle';
import { Loader } from 'components/loader/loader';
import NoDataMessage from 'components/NoDataMessage/NoDataMessage';
import { RecipesList } from 'components/RecipesList/RecipesList';

const MyRecipes = () => {
  const { isLoading, data, page, total, pages, limit } = useOwnRecipes();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOwnRecipesThunk({ page, limit }));
  }, [dispatch, page, limit, total, pages,]);

  const handleRemoveClick = recipeId => {
    // TODO
  };

  return (
    <>
      <MainTitle>My recipes</MainTitle>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!data.length ? (
            <NoDataMessage>
              You don't have any added recipes yet...
            </NoDataMessage>
          ) : (
            <RecipesList
              data={data}
              removeRecipe={handleRemoveClick}
              className="own-recipes"
            />
          )}
        </>
      )}
    </>
  );
};

export default MyRecipes;
