import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

//import useApp from 'hooks/useApp';
import useCategories from 'hooks/useCategories';
import useSearchByCategory from 'hooks/useSearchByCategory';

import { getCategoriesList } from 'redux/Categories/operations';
import { setPage, setQuery } from 'redux/Recipes/searchByCategory/slice';
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
  //const { device } = useApp();
  const { categories } = useCategories();
  const { data: recipes, isError, limit, page, pages } = useSearchByCategory();

  //const [currentPage, setCurrentPage] = useState(1);
  //const itemsPerPage = 8;
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
    //dispatch(setLimit(50));

    dispatch(
      getSearchByCategoryThunk({ query: categoryName, limit, page })
    ).then(() => {
      setIsLoading(false);
    });
  }, [dispatch, categoryName, limit, page]);

  useEffect(() => {
    if (isError) navigate(`/categories/Beef`);
  }, [isError, navigate]);

  const handleCategoryChange = category => {
    dispatch(setPage(1));
    // setCurrentPage(1);
    navigate(`/categories/${category}`);
  };

  const handlePageChange = pageNumber => {
    // setCurrentPage(pageNumber);
    dispatch(setPage(pageNumber));
  };

  // // Вычисление totalPages
  // const totalPages = recipes?.length
  //   ? Math.ceil(recipes.length / itemsPerPage)
  //   : 0;

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
            <RecipeGallery recipes={recipes} />

            {pages > 1 && (
              <Pagination
                totalPages={pages}
                currentPage={page}
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
