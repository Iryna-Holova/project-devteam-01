import {
  HeroContainer,
  HeroTitle,
  HeroText,
  HeroBtn,
  Time,
} from './RecipeHero.styled';

export const RecipePageHero = ({
  title,
  description,
  time,
  isFavorite,
  handleFavorites,
}) => {
  return (
    <HeroContainer>
      <HeroTitle>{title}</HeroTitle>
      <HeroText>{description}</HeroText>
      <HeroBtn onClick={handleFavorites} className={isFavorite && 'active'}>
        {isFavorite
          ? 'Remove from favorite recipes'
          : 'Add to favorite recipes'}
      </HeroBtn>
      <Time>{time} min</Time>
    </HeroContainer>
  );
};
