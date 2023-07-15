import { Link } from 'react-router-dom';

import {
  RecipeContainer,
  RecipeImg,
  List,
  Recipe,
  Description,
} from './RecipeGallery.styled';

import IngredientsPlaceholder from '../../assets/food-default.svg';

const RecipeGallery = ({ recipes = null }) => {
  return (
    recipes && (
      <List className="container">
        {recipes.map(({ _id, title, thumb }) => (
          <Recipe key={_id}>
            <Link to={`/recipe/${_id}`}>
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
