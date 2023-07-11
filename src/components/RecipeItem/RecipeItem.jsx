import Button from '../Button/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  RecipeItemBtn,
  RecipeItemContainer,
  RecipeItemBox,
  RecipeItemTitle,
  RecipeItemText,
} from './RecipeItem.styled';

export const RecipeItem = ({ img, id, title, description, time }) => {
  const navigate = useNavigate();

  return (
    <>
      <RecipeItemContainer>
        <img src={img} loading="lazy" alt={img} />
        <RecipeItemBox>
          <RecipeItemText>
            <RecipeItemTitle>
              <h2>{title}</h2>
              <Button
                onClick={() => {
                  navigate(`/recipe/${id}`);
                }}
              >
                {/* <Trash /> */}
              </Button>
            </RecipeItemTitle>
            <p>{description}</p>
          </RecipeItemText>

          <RecipeItemBtn>
            <p>
              {time} {time.includes('min') ? '' : 'min'}
            </p>
            <Button
              onClick={() => {
                navigate(`/recipe/${id}`);
              }}
            >
              See recipe
            </Button>
          </RecipeItemBtn>
        </RecipeItemBox>
      </RecipeItemContainer>
    </>
  );
};
