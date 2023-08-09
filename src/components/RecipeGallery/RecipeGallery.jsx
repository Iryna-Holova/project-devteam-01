import { PiHeartFill } from 'react-icons/pi';

import useAuth from 'hooks/use-auth';
import scrollToTop from 'utils/scroll-to-top';

import {
  RecipeContainer,
  RecipeImg,
  List,
  Recipe,
  Description,
  FavoriteButton,
} from './RecipeGallery.styled';

import noImage from '../../assets/images/no-image-recipe.webp';

const RecipeGallery = ({ recipes = null }) => {
  const { user } = useAuth();

  return (
    recipes && (
      <List className="container">
        {recipes.map(({ _id, title, thumb, favorite }) => {
          return (
            <Recipe key={_id}>
              <RecipeContainer
                to={`/recipe/${_id}`}
                onClick={() => {
                  scrollToTop();
                }}
              >
                <RecipeImg
                  src={thumb ? thumb : noImage}
                  alt={title}
                  loading="lazy"
                  onError={({ target }) => {
                    if (target.src !== noImage) {
                      target.onerror = null;
                      target.src = noImage;
                    }
                  }}
                />

                <Description>
                  <p>{title}</p>
                </Description>
              </RecipeContainer>
                              <FavoriteButton
                  className={
                    favorite.find(({ _userId }) => _userId === user._id) &&
                    'isFavorite'
                  }
                  onClick={() => console.log('hello')}
                >
                  <PiHeartFill />
                </FavoriteButton>
            </Recipe>
          );
        })}
      </List>
    )
  );
};

export default RecipeGallery;
