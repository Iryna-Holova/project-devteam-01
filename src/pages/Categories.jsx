import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import useApp from 'hooks/useApp';
import useCategories from 'hooks/useCategories';
import useSearchByCategory from 'hooks/useSearchByCategory';

import { getCategoriesList } from 'redux/Categories/operations';
import { setLimit, setQuery } from 'redux/Recipes/searchByCategory/slice';
import { getSearchByCategoryThunk } from 'redux/Recipes/searchByCategory/operations';

import CategoriesTabs from 'components/CategoriesTabs/CategoriesTabs';
import RecipeGallery from 'components/RecipeGallery/RecipeGallery';
import MainTitle from 'components/MainTitle/MainTitle';
import Pagination from '../components/Pagination/Pagination';
import ContentLoader from 'components/loader/ContentLoader';

const Categories = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { device } = useApp();
  const { categories } = useCategories();
  const { query, data: recipes, isError } = useSearchByCategory();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getCategoriesList()).then(() => {
      setIsLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(true);
    dispatch(setQuery(categoryName));
    dispatch(setLimit(50));

    dispatch(getSearchByCategoryThunk({ query: categoryName, limit: 50 })).then(
      () => {
        setIsLoading(false);
      }
    );
  }, [dispatch, categoryName, device, query]);

  useEffect(() => {
    if (isError) navigate(`/categories/Beef`);
  }, [isError, navigate]);

  const handleCategoryChange = category => {
    navigate(`/categories/${category}`);
  };

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  // Вычисление totalPages
  const totalPages = recipes?.length
    ? Math.ceil(recipes.length / itemsPerPage)
    : 0;

  return (
    <>
      <MainTitle>Categories</MainTitle>
      <CategoriesTabs
        categories={categories}
        selectedCategory={categoryName}
        handleCategoryChange={handleCategoryChange}
      />
      <div className="container page-container">
        {isLoading ? (
          <ContentLoader height="323px" />
        ) : (
          <>
            <RecipeGallery
              recipes={recipes.slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )}
            />

            {totalPages > 1 && (
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onClick={handlePageChange}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Categories;
