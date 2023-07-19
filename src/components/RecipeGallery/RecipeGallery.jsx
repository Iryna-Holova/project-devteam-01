import { useNavigate } from 'react-router-dom';
import scrollToTop from 'utils/scroll-to-top';

import {
  RecipeContainer,
  RecipeImg,
  List,
  Recipe,
  Description,
} from './RecipeGallery.styled';

import IngredientsPlaceholder from '../../assets/images/defaultDish.png';

const RecipeGallery = ({ recipes = null }) => {
  const navigate = useNavigate();
  return (
    recipes && (
      <>
        <List className="container">
          {recipes.map(({ _id, title, thumb }) => {
            console.log('Recipe:', title, thumb);
            return (
              <Recipe key={_id}>
                <RecipeContainer
                  onClick={() => {
                    navigate(`/recipe/${_id}`);
                    scrollToTop();
                  }}
                >
                  <Description>
                    <p>{title}</p>
                  </Description>
                  <RecipeImg
                    src={thumb ? thumb : IngredientsPlaceholder}
                    loading="lazy"
                    alt={title}
                  />
                </RecipeContainer>
              </Recipe>
            );
          })}
        </List>
      </>
    )
  );
};

export default RecipeGallery;

