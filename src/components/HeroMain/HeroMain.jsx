import ChooseBreakfast from './ChooseBreakfast/ChooseBreakfast';
import {
  HeroContainer,
  HeroTextContainer,
  HeroTitle,
  HeroText,
} from './HeroMain.styled';

const HeroMain = ({ children }) => {
  return (
    <HeroContainer className="container">
      <HeroTextContainer>
        <HeroTitle>
          <span>So</span>Yummy
        </HeroTitle>
        <HeroText>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </HeroText>
      </HeroTextContainer>
      <ChooseBreakfast />
      {children}
    </HeroContainer>
  );
};

export default HeroMain;
