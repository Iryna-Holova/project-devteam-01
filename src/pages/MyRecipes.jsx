//import useOwnRecipes from 'hooks/useOwnRecipes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  delOwnRecipesThunk,
  getOwnRecipesThunk,
} from 'redux/Recipes/own/operations';
import useOwnRecipes from 'hooks/useOwnRecipes';

import MainTitle from 'components/MainTitle/MainTitle';
import { Loader } from 'components/loader/loader';
import NoDataMessage from 'components/NoDataMessage/NoDataMessage';
import { RecipesList } from 'components/RecipesList/RecipesList';
import { PENDING, RESOLVED } from 'utils/constants';
import Pagination from 'components/Pagination/Pagination';
import { setPage } from 'redux/Recipes/own/slice';

const MyRecipes = () => {
  const { data, page, limit, isDeleting, status } = useOwnRecipes();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOwnRecipesThunk({ limit: 99999 }));
  }, [dispatch]);

  const handleRemoveClick = recipeId => {
    dispatch(delOwnRecipesThunk({ id: recipeId }));
    if (data.length === (page - 1) * 4 + 1) {
      dispatch(setPage(page - 1));
    }
  };

  const handlePageChange = pageNumber => {
    dispatch(setPage(pageNumber));
  };

  return (
    <>
      <MainTitle>My recipes</MainTitle>
      {status === PENDING && !isDeleting && <Loader />}
      {!data.length && (
        <NoDataMessage>You don't have any added recipes yet...</NoDataMessage>
      )}

      {status === RESOLVED && data.length !== 0 && (
        <>
          <RecipesList
            data={data.slice((page - 1) * limit, page * limit)}
            removeRecipe={handleRemoveClick}
            className="own-recipes"
          />
          <Pagination
            totalPages={data?.length ? Math.ceil(data.length / limit) : 0}
            currentPage={page}
            onClick={handlePageChange}
          />
        </>
      )}
      {/* {isLoading ? (
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
      )} */}
    </>
  );
};

export default MyRecipes;

// {
//   status === PENDING && !isDeleting && <Loader />;
// }
// {
//   !favorite.length && (
//     <NoDataMessage>
//       You haven't added your favorite recipes yet...
//     </NoDataMessage>
//   );
// }

// {
//   status === RESOLVED && favorite.length !== 0 && (
//     <>
//       <RecipesList
//         data={favorite.slice((page - 1) * limit, page * limit)}
//         removeRecipe={handleRemoveClick}
//       />
//       <Pagination
//         totalPages={favorite?.length ? Math.ceil(favorite.length / limit) : 0}
//         currentPage={page}
//         onClick={handlePageChange}
//       />
//     </>
//   );
// }
