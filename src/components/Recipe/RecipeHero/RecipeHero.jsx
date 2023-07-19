import { BsYoutube } from 'react-icons/bs';
import {
  HeroContainer,
  HeroTitle,
  HeroText,
  HeroBtn,
  Time,
} from './RecipeHero.styled';
import { FiClock } from 'react-icons/fi';

export const RecipePageHero = ({
  title,
  description,
  time,
  isFavorite,
  handleFavorites,
  youtube
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
      <Time><FiClock/><span>{time} min</span></Time>
      {youtube && <a target='blanc' href={youtube}><BsYoutube/></a> }
    </HeroContainer>
  );
};
