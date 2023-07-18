import MainTitle from 'components/MainTitle/MainTitle';
import RecipeGallery from '../components/RecipeGallery/RecipeGallery'
import { useParams } from 'react-router-dom';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import useSearchBy from '../hooks/useSearchBy'
import img from '../assets/images/empty-img.png';
import { useDispatch } from 'react-redux';
import {getSearchByThunk} from '../redux/Recipes/SearchBy/operations'
import {SEARCH_BY_TITLE, SEARCH_BY_INGREDIENT} from '../utils/constants'

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('title');

  const dispatch = useDispatch()
  const { recipes, status, isLoading, error } = useSearchBy();
  const {searchQuery} = useParams();

  useEffect(() => {
    if (searchQuery !== '' && searchQuery !== undefined) {
      debugger
      setSearchValue(searchQuery);
    }

    if (searchValue === '') {
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
    <Searchbar
    onSubmit={formOnsubmitHandler}
    />
    {isLoading && <p>Loading...</p>}
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
      <img src={img} alt="Fruit Basket" width="350" />
      <p>Try looking for something else..</p>
    </div>
  )}
  {(status === 2 && recipes) && (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <img src={img} alt="Fruit Basket" width="350" />
      <p>Try looking for something else..</p>
    </div>
  )}
  
    </>
  );
};

export default Search;
