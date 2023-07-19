import { RecipePageHero } from 'components/Recipe/RecipeHero/RecipeHero';
import { RecipePreparation } from 'components/Recipe/RecipePreparation/RecipePreparation';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from 'services/api/getRecipe';
import { IngredientsTable } from 'components/Recipe/RecipeIngredientsTable/IngredientsTable';
import {
  addToFavoriteRecipesThunk,
  getFavoriteRecipesThunk,
  removeFromFavoriteRecipesThunk,
} from 'redux/Recipes/favorite/operations';
import { useDispatch } from 'react-redux';
import useAuth from 'hooks/use-auth';
import { getShoppingListV2Thunk } from 'redux/ShoppingListV2/operations';

const Recipe = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

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
      //  console.log(recipe.favorite, user);
      if (
        recipe?.favorite.findIndex(({ _userId }) => _userId === user._id) >= 0
      )
        setIsFavorite(true);
      else setIsFavorite(false);

      setRecipe(recipe);
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
    recipe && (
      <>
        <RecipePageHero
          title={recipe.title}
          description={recipe.description}
          time={recipe.time}
          isFavorite={isFavorite}
          handleFavorites={handleFavorites}
          youtube={recipe.youtube}
        />
        <IngredientsTable
          ingredients={recipe.ingredients}
          recipeId={recipe._id}
          recipe={recipe}
        ></IngredientsTable>
        <RecipePreparation
          image={recipe.thumb}
          instructions={recipe.instructions}
          title={recipe.title}
        />
      </>
    )
  );
};

export default Recipe;
