import ChooseBreakfast from './ChooseBreakfast/ChooseBreakfast';
import { HeroTitle, HeroText, HeroTitleGreen } from './HeroMain.styled';

const HeroMain = () => {
  return (
    <>
        <HeroTitle><HeroTitleGreen>So</HeroTitleGreen>Yummy</HeroTitle>
        <HeroText>"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.</HeroText>
        <ChooseBreakfast/>
    </>
    );
};

export default HeroMain;
