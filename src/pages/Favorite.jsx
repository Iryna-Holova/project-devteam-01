import { FavoriteRecipes } from 'components/FavoriteRecipes/FavoriteRecipes';
import { useEffect } from 'react';

// import { Helmet } from 'react-helmet-async';
import { scrollToTop } from 'components/utils/scrollToTop';
import MainTitle from 'components/MainTitle/MainTitle';

const FavoritePage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      {/* <Helmet>
        <title>My favorites</title>
      </Helmet> */}
      <div className="container">
        <MainTitle>Favorites</MainTitle>
        <FavoriteRecipes />
      </div>
    </>
  );
};

export default FavoritePage;
