import CategoriesPreview from 'components/CategoriesPreview/CategoriesPreview';
import { MainContainer } from 'components/HeroMain/HeroMain.styled';
//import { getRecipesMainAPI } from 'api/recipesMain';
import { useEffect, useState } from 'react';
import useApp from 'hooks/useApp';
import recipesServices from 'services/api/recipes-api';
import utils from 'utils';
import HeroMain from 'components/HeroMain/HeroMain';
// import { Searchbar } from 'components/Searchbar/Searchbar';

const Main = () => {
  const [recipes, setRecipes] = useState([]);
  const { device } = useApp();

  useEffect(() => {
    const limit = utils.getPageLimit('main', device);
    recipesServices
      .getRecipesMain({ limit })
      .then(recipesMain => setRecipes(recipesMain));
  }, [device]);
  return (
    <MainContainer>
      <HeroMain/>
      {/* <Searchbar /> */}
      <CategoriesPreview recipes={recipes} />
    </MainContainer>
  );
};

export default Main;
