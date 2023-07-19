import React, { useEffect, useState } from 'react';
import { getPopularRecipe } from 'services/api/get-popular';
import { Loader } from 'components/loader/loader';
import { Error } from './Error';
import {
  StyledCard,
  StyledCardList,
  StyledInstructions,
  StyledPicture,
  StyledRecipeTitle,
  StyledSectionWrapper,
  StyledTitle,
  StyledWrapper,
  StyledLink,
} from './PopularRecipe.styled';

import IngredientsPlaceholder from '../../../assets/images/defaultDish.png';

const PopularRecipe = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchPopularRecipes = async () => {
      setIsLoading(true);
      try {
        const data = await getPopularRecipe();
        setPopularRecipes(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchPopularRecipes();
  }, []);

  return (
<StyledSectionWrapper>
  <div className='container'>
  <StyledTitle>Popular recipe</StyledTitle>
    {isError ? (
      <Error />
    ) : (
      <StyledCardList>
        {
          popularRecipes.map(({ _id, preview, title, instructions }) => {
            return (
              <StyledWrapper key={_id}>
                <StyledLink to={`/recipe/${_id}`}>
                  <StyledCard>
                    <StyledPicture
                       src={preview ? preview : IngredientsPlaceholder}
                      alt="recipe"
                      loading="lazy"
                    />
                    <div>
                      <StyledRecipeTitle>{title}</StyledRecipeTitle>
                      <StyledInstructions>{instructions}</StyledInstructions>
                    </div>
                  </StyledCard>
                </StyledLink>
              </StyledWrapper>
            );
          })}
      </StyledCardList>
    )}

    {isLoading && <Loader />}
    </div>
  </StyledSectionWrapper>
    
);
        };

export default PopularRecipe;
