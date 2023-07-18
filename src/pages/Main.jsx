import { useNavigate } from 'react-router-dom';
import scrollToTop from 'utils/scroll-to-top';
import CategoriesPreview from 'components/CategoriesPreview/CategoriesPreview';
import { MainContainer } from 'components/HeroMain/HeroMain.styled';
import { useEffect, useState } from 'react';
import useApp from 'hooks/useApp';
import recipesServices from 'services/api/recipes-api';
import utils from 'utils';
import HeroMain from 'components/HeroMain/HeroMain';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { SearchContainer } from 'components/CategoriesPreview/CategoriesPreview.styled';


const Main = () => {
  const [recipesByCategory, setRecipesByCategory] = useState([]);
  const { device } = useApp();

  useEffect(() => {
    const limit = utils.getPageLimit('main', device);
    recipesServices
      .getRecipesMain({ limit })
      .then(recipesMain => setRecipesByCategory(recipesMain));
  }, [device]);

  const navigate = useNavigate();
  const handleSubmit = (value) => {
    if (value !== '') {
      navigate(`/search/${value}`);
      scrollToTop();
    }

    // TODO: create push message for user
    if (value === '') {
      return 
    }
  }

  return (
    <MainContainer>
      <HeroMain />
      <SearchContainer>
        <Searchbar onSubmit={handleSubmit}/>
      </SearchContainer>
      <CategoriesPreview recipesByCategory={recipesByCategory} />
    </MainContainer>
  );
};

export default Main;
