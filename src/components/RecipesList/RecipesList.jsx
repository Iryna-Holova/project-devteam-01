import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FiTrash2 } from 'react-icons/fi';
import { BsFullscreen } from 'react-icons/bs';
import { PiCameraFill } from 'react-icons/pi';

import {
  RecipeItemBtn,
  RecipeItemContainer,
  RecipeItemBox,
  RecipeItemTitle,
  RecipeItemText,
  RecipesListContainer,
  ImagePlaceholder,
} from './RecipesList.styled';

export const RecipesList = ({ data, removeRecipe }) => {
  const navigate = useNavigate();

  return (
    <RecipesListContainer className="container">
      <>
        {data.map(({ thumb, _id, title, description, time }) => {
          return (
            <RecipeItemContainer key={_id}>
              <ImagePlaceholder>
                <BsFullscreen style={{ width: '40px', height: '40px' }} />
                <PiCameraFill />
                <img src={thumb} loading="lazy" alt={title} />
              </ImagePlaceholder>
              <RecipeItemBox>
                <RecipeItemText>
                  <RecipeItemTitle>
                    <h3>{title}</h3>
                    <button
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
                    onClick={() => {
                      navigate(`/recipe/${_id}`);
                    }}
                  >
                    See recipe
                  </button>
                </RecipeItemBtn>
              </RecipeItemBox>
            </RecipeItemContainer>
          );
        })}
      </>
    </RecipesListContainer>
  );
};
