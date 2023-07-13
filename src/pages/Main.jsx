import CategoriesPreview from 'components/CategoriesPreview/CategoriesPreview';
import { MainContainer } from 'components/HeroMain/HeroMain.styled';
//import { getRecipesMainAPI } from 'api/recipesMain';
import { useEffect, useState } from 'react';
import useApp from 'hooks/useApp';
import recipesServices from 'services/api/recipes-api';
import utils from 'utils';
import HeroMain from 'components/HeroMain/HeroMain';
// TODO: insert component of SearchForm
// import SearchForm from "components/SeachForm/SeachForm";

const Main = () => {
  const [recipes, setRecipes] = useState([]);
  const { device } = useApp();
  // useEffect(() => {
  //     getRecipesMainAPI().then(recipesMain => setRecipes(recipesMain))
  // }, [])
  useEffect(() => {
    const limit = utils.getPageLimit('main', device);
    recipesServices
      .getRecipesMain({ limit })
      .then(recipesMain => setRecipes(recipesMain));
  }, [device]);
  return (
    <MainContainer>
      <HeroMain/>
      {/* <SearchForm /> */}
      <CategoriesPreview recipes={recipes} />
    </MainContainer>
  );
};

export default Main;
