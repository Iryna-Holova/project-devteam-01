import React, { createRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { FiTrash2 } from 'react-icons/fi';
import { BsFullscreen } from 'react-icons/bs';
import { PiCameraFill } from 'react-icons/pi';
import noImage from '../../assets/images/no-image-recipe.webp';
import scrollToTop from 'utils/scroll-to-top';

import {
  RecipeItemBtn,
  RecipeItemContainer,
  RecipeItemBox,
  RecipeItemTitle,
  RecipeItemText,
  RecipesListContainer,
  ImagePlaceholder,
} from './RecipesList.styled';

export const RecipesList = ({ data, removeRecipe, className, isDeleting }) => {
  const navigate = useNavigate();

  return (
    <RecipesListContainer className="container">
      <TransitionGroup className="recipe-list">
        {data.map(
          ({
            preview,
            _id,
            title,
            description,
            time,
            nodeRef = createRef(),
          }) => (
            <CSSTransition
              key={_id}
              nodeRef={nodeRef}
              timeout={500}
              classNames="item"
            >
              <RecipeItemContainer ref={nodeRef}>
                <ImagePlaceholder>
                  <BsFullscreen style={{ width: '40px', height: '40px' }} />
                  <PiCameraFill />
                  <img src={preview || noImage} loading="lazy" alt={title} />
                </ImagePlaceholder>
                <RecipeItemBox>
                  <RecipeItemText>
                    <RecipeItemTitle>
                      <h3>{title}</h3>
                      <button
                        className={className}
                        onClick={() => {
                          removeRecipe(_id);
                        }}
                      >
                        <FiTrash2 />
                      </button>
                    </RecipeItemTitle>
                    <p>{description}</p>
                  </RecipeItemText>

                  <RecipeItemBtn>
                    <p>
                      {time} {time.includes('min') ? '' : 'min'}
                    </p>
                    <button
                      className={className}
                      onClick={() => {
                        navigate(`/recipe/${_id}`);
                        scrollToTop();
                      }}
                    >
                      See recipe
                    </button>
                  </RecipeItemBtn>
                </RecipeItemBox>
              </RecipeItemContainer>
            </CSSTransition>
          )
        )}
      </TransitionGroup>
    </RecipesListContainer>
  );
};
