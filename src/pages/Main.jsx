import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useApp from 'hooks/useApp';
import utils from 'utils';
import recipesServices from 'services/api/recipes-api';
import scrollToTop from 'utils/scroll-to-top';
import HeroMain from 'components/HeroMain/HeroMain';
import Searchbar from 'components/Searchbar/Searchbar';
import CategoriesPreview from 'components/CategoriesPreview/CategoriesPreview';
import { MainContainer } from 'components/HeroMain/HeroMain.styled';

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
      navigate(`/search?title=${value}`);
      scrollToTop();
    }
   
    if (value === '') {
      return 
    }
  }

  return (
    <MainContainer>
      <HeroMain><Searchbar className="styles-for-main" onSubmit={handleSubmit}/></HeroMain>
      <CategoriesPreview recipesByCategory={recipesByCategory} />
    </MainContainer>
  );
};

export default Main;
