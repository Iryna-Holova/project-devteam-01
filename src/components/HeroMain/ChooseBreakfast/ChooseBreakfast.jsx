import {
  Container,
  Text,
  StyledLink,
  TextContainer,
  StyledArrow,
} from './ChooseBreakfast.styled';

import { HiArrowNarrowRight } from 'react-icons/hi';
import arrow from '../../../assets/svg/MainPage/arrow.svg';

const ChooseBreakfast = () => {
  return (
    <Container>
      <TextContainer>
        <Text>
          <span>Delicious and healthy</span> way to enjoy a variety of fresh
          ingredients in one satisfying meal
        </Text>
        <StyledLink to="/categories/breakfast">
          See recipes
          <HiArrowNarrowRight />
        </StyledLink>
      </TextContainer>
      <StyledArrow src={arrow} alt="arrow" />
    </Container>
  );
};

export default ChooseBreakfast;
