import ChooseBreakfast from './ChooseBreakfast/ChooseBreakfast';
import { HeroContainer, HeroTitle, HeroText, HeroTitleGreen, NewLine, MainContainer } from './HeroMain.styled';

const HeroMain = () => {
  return (
    <MainContainer>
      <HeroContainer>
        <HeroTitle><HeroTitleGreen>So</HeroTitleGreen>Yummy</HeroTitle>
        <HeroText>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save </HeroText><NewLine>them for the future.</NewLine>
      </HeroContainer>
      <ChooseBreakfast/>
    </MainContainer>
      
    );
};

export default HeroMain;
