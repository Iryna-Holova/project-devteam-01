import { RecipePageHero } from 'components/Recipe/RecipeHero/RecipeHero';
import { RecipePreparation } from 'components/Recipe/RecipePreparation/RecipePreparation';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from 'services/api/getRecipe';
import { IngredientsTable } from 'components/Recipe/RecipeIngredientsTable/IngredientsTable';
import { addToFavoriteRecipesThunk, getFavoriteRecipesThunk, removeFromFavoriteRecipesThunk } from 'redux/Recipes/favorite/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsFavorite } from 'redux/Recipes/favorite/selectors';

const Recipe = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  const dispatch = useDispatch();
  const  fav=useSelector(state=>selectIsFavorite(state,recipeId));
  const [isFavorite, setIsFavorite] = useState(fav);

  
  // const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(getFavoriteRecipesThunk({limit:999999}));
    
  }, [dispatch])
  

  useEffect(() => {
    async function fetchData() {
      const recipe = await getRecipeById(recipeId);
      setRecipe(recipe);
    }
    fetchData();
  }, [recipeId]);

  useEffect(() => {
    //console.log(fav);
    setIsFavorite(fav);
  }, [fav]);


  const handleFavorites = async () => {
   // console.log(fav);
   // console.log('fav',fav);
   // console.log('handle add favorite',isFavorite,fav);
    if (!isFavorite) dispatch(addToFavoriteRecipesThunk(recipe)); else dispatch(removeFromFavoriteRecipesThunk(recipeId));
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
        />
        <IngredientsTable
          ingredients={recipe.ingredients}
          recipeId={recipe._id}
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
