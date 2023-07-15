import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import useApp from 'hooks/useApp';
import useCategories from 'hooks/useCategories';
import useSearchByCategory from 'hooks/useSearchByCategory';

import { getCategoriesList } from 'redux/Categories/operations';
import { setLimit, setQuery } from 'redux/Recipes/searchByCategory/slice';
import { getSearchByCategoryThunk } from 'redux/Recipes/searchByCategory/operations';

import utils from 'utils';

import CategoriesTabs from 'components/CategoriesTabs/CategoriesTabs';
import RecipeGallery from 'components/RecipeGallery/RecipeGallery';
import MainTitle from 'components/MainTitle/MainTitle';
import {StyledDiv} from './Categories.styled';
const Categories = () => {
  const { categoryName } = useParams();
  // const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();
  const { device } = useApp();
  const dispatch = useDispatch();
  const { categories } = useCategories();
  const { query, data: recipes, isError } = useSearchByCategory();

  useEffect(() => {
    // console.log(categories);
    if (categories.length === 0) {
      dispatch(getCategoriesList());
    }
  }, [dispatch, categories]);

  // переписать на бек
  useEffect(() => {
    const curLimit = utils.getPageLimit('category', device);

    if (query === categoryName) return;
    dispatch(setQuery(categoryName));
    dispatch(setLimit(curLimit));

    dispatch(
      getSearchByCategoryThunk({ query: categoryName, limit: curLimit })
    );

    //console.log(recipes);
  }, [dispatch, categoryName, device, query]);

  useEffect(() => {
    //console.log('error', isError); //
    if (isError) navigate(`/categories/Beef`);
  }, [isError, navigate]);

  // useEffect(() => {
  //   const categoryRecipes = recipesData.filter(
  //     recipe => recipe.category.toLowerCase() === categoryName
  //   );
  //   setRecipes(categoryRecipes);
  // }, [categoryName]);

  const handleCategoryChange = category => {
    //dispatch(setQuery(category));
    navigate(`/categories/${category}`);
  };

  return (
    <StyledDiv>
      <MainTitle>Categories</MainTitle>
      <CategoriesTabs
        categories={categories}
        selectedCategory={categoryName}
        handleCategoryChange={handleCategoryChange}
      />

      <RecipeGallery recipes={recipes} />
    </StyledDiv>
  );
};

export default Categories;
