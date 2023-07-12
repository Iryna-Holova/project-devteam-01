import {
    RecipePageHeroContainer,
    RecipePageHeroTitle,
    RecipePageHeroText,
  } from './RecipePageHero.styled';
  
  export const RecipePageHero = ({ title, description }) => {
    return (
      <RecipePageHeroContainer>
        <RecipePageHeroTitle>{title}</RecipePageHeroTitle>
        <RecipePageHeroText>{description}</RecipePageHeroText>
        
      </RecipePageHeroContainer>
    );
  };
  