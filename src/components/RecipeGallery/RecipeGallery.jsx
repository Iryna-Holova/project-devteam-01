import { Link } from 'react-router-dom';
import { RecipeContainer, RecipeImg } from './RecipeGallery.styled';
import { List, Recipe, Description } from './RecipeGallery.styled';
import IngredientsPlaceholder from '../../assets/food-default.svg';

const RecipeGallery = ({ recipes = null }) => {
  // console.log(recipes);
  return (
    recipes && (
      <List className="container">
        {recipes.map(({ id, title, thumb }, index) => (
          <Recipe key={index}>
            <Link to={`/recipe/${id}`}>
              <RecipeContainer>
                <Description>
                  <p>{title}</p>
                </Description>
                <RecipeImg
                  src={thumb ? thumb : IngredientsPlaceholder}
                  loading="lazy"
                  alt={title}
                />
              </RecipeContainer>
            </Link>
          </Recipe>
        ))}
      </List>
    )
  );
};

export default RecipeGallery;
