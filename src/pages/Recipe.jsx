import { RecipePageHero } from 'components/Recipe/RecipeHero/RecipeHero';
import { RecipePreparation } from 'components/Recipe/RecipePreparation/RecipePreparation';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import {
//   InngredientsList,
//   RecipeItem,
//   TableRecipe,
// } from 'components/Recipe/RecipeInngredientsList/RecipeInngredientsList.styled';
import { getRecipeById } from 'services/api/getRecipe';
import { IngredientsTable } from 'components/Recipe/RecipeIngredientsTable/IngredientsTable';

const Recipe = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  // const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const recipe = await getRecipeById(recipeId);
      console.log(recipe);
      setRecipe(recipe);
    }
    fetchData();
  }, [recipeId]);

  const handleFavorites = async () => {
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
