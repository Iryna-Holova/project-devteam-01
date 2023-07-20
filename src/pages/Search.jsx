import MainTitle from 'components/MainTitle/MainTitle';
import RecipeGallery from '../components/RecipeGallery/RecipeGallery'
import { useSearchParams } from 'react-router-dom';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import useSearchBy from '../hooks/useSearchBy';
import NoDataMessage from 'components/NoDataMessage/NoDataMessage';
import { useDispatch } from 'react-redux';
import { getSearchByThunk } from '../redux/Recipes/SearchBy/operations';
import { SEARCH_BY_TITLE, SEARCH_BY_INGREDIENT } from '../utils/constants';
import { Loader } from 'components/loader/loader';

const Search = () => {
  const [searchQuery,
    // setSearchQuery
  ] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchQuery.get('title') || searchQuery.get('ingredients') || '');
  const [selectedValue, setSelectedValue] = useState('title');

  const dispatch = useDispatch()
  const { recipes, status, isLoading, error } = useSearchBy();
  

  useEffect(() => {
    const searchWord = searchQuery.get('title') || searchQuery.get('ingredients') || "";
    if (searchWord !== '' && searchWord !== undefined) {
      setSearchValue(searchWord);
    }

    if (searchValue === '' || searchValue === undefined) {
      return;
    } 

    if (selectedValue === 'ingredients' && searchValue !== '') {
        dispatch(getSearchByThunk({query:searchValue, method:SEARCH_BY_INGREDIENT}))
    }
    if (selectedValue === 'title' && searchValue !== '') {
        dispatch(getSearchByThunk({query:searchValue, method:SEARCH_BY_TITLE}))
    }
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

  console.log(error); // Just for build

  return (
    <>
    <MainTitle>
      Search
    </MainTitle>
    <Searchbar searchQuery={searchValue}
    onSubmit={formOnsubmitHandler}
    />
    {isLoading && <Loader/>}
    {status === 2 && <RecipeGallery recipes={recipes} />}
    {status === 1 && <p>...</p>}
    {status === 3 && (
      <div
        style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
      >
      <NoDataMessage>
        Try looking for something else...
      </NoDataMessage>
    </div>
  )}
    </>
  );
};

export default Search;
