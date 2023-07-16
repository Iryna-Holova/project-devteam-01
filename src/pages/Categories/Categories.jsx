import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import useApp from 'hooks/useApp';
import useCategories from 'hooks/useCategories';
import useSearchByCategory from 'hooks/useSearchByCategory';

import { getCategoriesList } from 'redux/Categories/operations';
import { setLimit, setQuery } from 'redux/Recipes/searchByCategory/slice';
import { getSearchByCategoryThunk } from 'redux/Recipes/searchByCategory/operations';

//import utils from 'utils';

import CategoriesTabs from 'components/CategoriesTabs/CategoriesTabs';
import RecipeGallery from 'components/RecipeGallery/RecipeGallery';
import MainTitle from 'components/MainTitle/MainTitle';
import { StyledDiv } from './Categories.styled';
import Pagination from '../../components/Pagination/Pagination';

const Categories = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const { device } = useApp();
  const dispatch = useDispatch();
  const { categories } = useCategories();
  const { query, data: recipes, isError } = useSearchByCategory();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategoriesList());
    }
  }, [dispatch, categories]);

  useEffect(() => {
   // const curLimit = utils.getPageLimit('category', device);

    if (query === categoryName) return;
    dispatch(setQuery(categoryName));
    dispatch(setLimit(50));

    dispatch(getSearchByCategoryThunk({ query: categoryName, limit: 50 }));
  }, [dispatch, categoryName, device, query]);

  useEffect(() => {
    if (isError) navigate(`/categories/Beef`);
  }, [isError, navigate]);

  const handleCategoryChange = (category) => {
    navigate(`/categories/${category}`);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Вычисление totalPages
  const totalPages = recipes?.length
    ? Math.ceil(recipes.length / itemsPerPage)
    : 0;

  // ...

return (
  <StyledDiv>
    <MainTitle>Categories</MainTitle>
    <CategoriesTabs
      categories={categories}
      selectedCategory={categoryName}
      handleCategoryChange={handleCategoryChange}
    />

    {recipes && recipes.length && (
      <>
        <RecipeGallery
          recipes={recipes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
        />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onClick={handlePageChange}
        />
      </>
    )}
  </StyledDiv>
);

};

export default Categories;
