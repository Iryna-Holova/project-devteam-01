import MainTitle from 'components/MainTitle/MainTitle';
import RecipeGallery from '../components/RecipeGallery/RecipeGallery';
import { useSearchParams } from 'react-router-dom';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import useSearchBy from '../hooks/useSearchBy';
import NoDataMessage from 'components/NoDataMessage/NoDataMessage';
import { useDispatch } from 'react-redux';
import { getSearchByThunk } from '../redux/Recipes/SearchBy/operations';
import { SEARCH_BY_TITLE, SEARCH_BY_INGREDIENT } from '../utils/constants';

const Search = () => {
  const [searchQuery] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchQuery.get('title') || searchQuery.get('ingredients') || ''
  );
  const [selectedValue, setSelectedValue] = useState('title');
  const dispatch = useDispatch();
  const { recipes } = useSearchBy();

  useEffect(() => {
    const searchWord =
      searchQuery.get('title') || searchQuery.get('ingredients') || '';
    const delayDebounceInput = setTimeout(() => {
      if (searchWord !== '' && searchWord !== undefined) {
        setSearchValue(searchWord);
      }
    }, 1500);

    if (searchValue === '' || searchValue === undefined) {
      return;
    }

    if (selectedValue === 'ingredients' && searchValue !== '') {
      dispatch(
        getSearchByThunk({ query: searchValue, method: SEARCH_BY_INGREDIENT })
      );
    }
    if (selectedValue === 'title' && searchValue !== '') {
      dispatch(
        getSearchByThunk({ query: searchValue, method: SEARCH_BY_TITLE })
      );
    }

    return () => clearTimeout(delayDebounceInput);
  }, [searchValue, searchQuery, selectedValue, dispatch]);

  // Функция записывает полученные значения из SearchBar в стейт
  const formOnsubmitHandler = (value, selectValue) => {
    if (searchValue !== value) {
      setSearchValue(value);
    }

    if (selectedValue !== selectValue) {
      setSelectedValue(selectValue);
    }
  };

  return (
    <div style={{ marginBottom: '50px' }}>
      <MainTitle>Search</MainTitle>
      <Searchbar searchQuery={searchValue} onSubmit={formOnsubmitHandler} />
      {recipes && <RecipeGallery recipes={recipes} />}
      {!recipes.length && (
        <NoDataMessage>Try looking for something else...</NoDataMessage>
      )}
    </div>
  );
};

export default Search;
