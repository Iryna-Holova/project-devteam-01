import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { SEARCH_BY_TITLE, SEARCH_BY_INGREDIENT } from '../utils/constants';
import { setPage } from 'redux/Recipes/SearchBy/slice';
import useSearchBy from '../hooks/useSearchBy';
import { getSearchByThunk } from '../redux/Recipes/SearchBy/operations';

import MainTitle from 'components/MainTitle/MainTitle';
import Searchbar from 'components/Searchbar/Searchbar';
import RecipeGallery from '../components/RecipeGallery/RecipeGallery';
import Pagination from 'components/Pagination/Pagination';
import NoDataMessage from 'components/NoDataMessage/NoDataMessage';
import { SearchPageContainer } from 'components/Searchbar/Searchbar.styled';

const Search = () => {
  const [searchQuery] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchQuery.get('title') || searchQuery.get('ingredients') || ''
  );
  const [selectedValue, setSelectedValue] = useState('title');
  const dispatch = useDispatch();
  const { recipes, page, limit, pages, query } = useSearchBy();

  useEffect(() => {
    if (query.value !== '') {
      dispatch(
        getSearchByThunk({
          query: query.value,
          method:
            query.param === 'title' ? SEARCH_BY_TITLE : SEARCH_BY_INGREDIENT,
          limit,
          page,
        })
      );
    }
  }, [query, dispatch, limit, page]);

  useEffect(() => {
    if (pages === 0) return;
    if (page > pages) dispatch(setPage(pages));
  }, [pages, page, dispatch]);

  // Функция записывает полученные значения из SearchBar в стейт
  const formOnsubmitHandler = (value, selectValue) => {
    if (searchValue !== value) {
      setSearchValue(value);
    }

    if (selectedValue !== selectValue) {
      setSelectedValue(selectValue);
    }
  };

  const handlePageChange = pageNumber => {
    dispatch(setPage(pageNumber));
  };

  return (
    <>
      <MainTitle>Search</MainTitle>
      <SearchPageContainer className="container">
        <Searchbar searchQuery={searchValue} onSubmit={formOnsubmitHandler} />
        {recipes.length > 0 && <RecipeGallery recipes={recipes} />}
        {!recipes.length && (
          <NoDataMessage>Try looking for something else...</NoDataMessage>
        )}
        {pages > 1 && (
          <Pagination
            totalPages={pages}
            currentPage={page}
            onClick={handlePageChange}
          />
        )}
      </SearchPageContainer>
    </>
  );
};

export default Search;
