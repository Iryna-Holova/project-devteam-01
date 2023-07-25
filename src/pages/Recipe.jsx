import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  addToFavoriteRecipesThunk,
  getFavoriteRecipesThunk,
  removeFromFavoriteRecipesThunk,
} from 'redux/Recipes/favorite/operations';
import { getShoppingListV2Thunk } from 'redux/ShoppingListV2/operations';
import useAuth from 'hooks/use-auth';
import { getRecipeById } from 'services/api/getRecipe';

import RecipePageHero from 'components/Recipe/RecipeHero/RecipeHero';
import RecipePreparation from 'components/Recipe/RecipePreparation/RecipePreparation';
import IngredientsTable from 'components/Recipe/RecipeIngredientsTable/IngredientsTable';
import NoDataMessage from 'components/NoDataMessage/NoDataMessage';
import ContentLoader from 'components/loader/ContentLoader';
import noImage from '../assets/images/no-image-recipe.webp';

const Recipe = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    Promise.all([
      dispatch(getFavoriteRecipesThunk({ limit: 999999 })),
      dispatch(getShoppingListV2Thunk()),
    ]);
  }, [dispatch]);

  useEffect(() => {
    async function fetchData() {
      const recipe = await getRecipeById(recipeId);
      if (!recipe) {
        setRecipe({ title: 'Recipe not found :(' });
        setIsLoading(false);
        return;
      }
      if (
        recipe?.favorite.findIndex(({ _userId }) => _userId === user._id) >= 0
      ) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }

      setRecipe(recipe);
      setIsLoading(false);
    }
    fetchData();
  }, [recipeId, user._id]);

  const handleFavorites = async () => {
    const index = recipe.favorite.findIndex(
      ({ _userId }) => _userId === user._id
    );
    if (isFavorite) {
      dispatch(removeFromFavoriteRecipesThunk(recipeId));
      if (index >= 0) recipe.favorite.splice(index, 1);
    } else {
      dispatch(addToFavoriteRecipesThunk(recipe));
      if (index < 0) recipe.favorite.push({ userId: user._id });
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <RecipePageHero
        title={recipe.title}
        description={recipe.description}
        time={recipe.time}
        isFavorite={isFavorite}
        handleFavorites={handleFavorites}
        youtube={recipe.youtube}
      />
      {isLoading ? (
        <ContentLoader />
      ) : (
        <>
          {!recipe.ingredients ? (
            <NoDataMessage>Ingredients not found...</NoDataMessage>
          ) : (
            <>
              <IngredientsTable
                ingredients={recipe.ingredients}
                recipeId={recipe._id}
                recipe={recipe}
              ></IngredientsTable>
              <RecipePreparation
                image={recipe.thumb || noImage}
                instructions={recipe.instructions}
                title={recipe.title}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Recipe;
