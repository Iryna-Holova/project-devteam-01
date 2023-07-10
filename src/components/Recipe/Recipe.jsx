import { RecipePageHero } from './RecipePageHero/RecipePageHero';
import { RecipePreparation } from './RecipePreparation/RecipePreparation';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContainerRecipe, TableRecipe, InngredientsList, Container, RecipeItem } from './Recipe.styled';
import { ContainerError } from './Recipe.styled';

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const [ingredientsList, setIngredientsList] = useState([]);
  // eslint-disable-next-line
  const [ingredientsMeasureList, setIngredientsMeasureList] = useState([]);
  const { recipeId } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getRecipe() {
      try {
        const data = {
          title: 'Recipe Title',
          description: 'Recipe Description',
          time: '30 minutes',
          ingredients: [
            {
              _id: 'ingredient1',
              thb: 'Ingredient 1',
              ttl: 'Ingredient 1',
              desc: 'Ingredient 1 Description',
            },
            {
              _id: 'ingredient2',
              thb: 'Ingredient 2',
              ttl: 'Ingredient 2',
              desc: 'Ingredient 2 Description',
            },
          ],
          thumb: 'recipe_thumb_image_url',
          instructions: 'Recipe Instructions',
        };

        if (data && data.ingredients) {
          const ing = data.ingredients;
          const measures = ing.map(({ _id: { _id }, measure }) => ({
            id: _id,
            measure,
          }));
          setIngredientsMeasureList(measures);
          setIngredientsList(ing.map(({ _id }) => _id));
          setRecipe(data);
        } else {
          setError('Unable to retrieve recipe data');
        }
      } catch (error) {
        setError(error.message);
        console.log(error);
      }
    }

    getRecipe();
  }, [recipeId]);

  return (
    <ContainerRecipe>
      {error && (
        <ContainerError>
          
        </ContainerError>
      )}
      {recipe && !error && (
        <>
          <RecipePageHero
            title={recipe.title}
            description={recipe.description}
            time={recipe.time}
            id={recipeId}
          />
          <Container>
            <TableRecipe>
              <p>Ingredients</p>
              <p>
                Number <span>Add to list</span>
              </p>
            </TableRecipe>
            <InngredientsList>
              {ingredientsList.map(({ _id, thb, ttl, desc }, i) => {
                
                return (
                  <RecipeItem
                    
                  />
                );
              })}
            </InngredientsList>

            <RecipePreparation
              
            />
          </Container>
        </>
      )}
    </ContainerRecipe>
  );
};

export default Recipe;