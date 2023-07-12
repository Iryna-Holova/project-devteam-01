import useCategories from 'hooks/useCategories';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMainPage } from 'redux/Recipes/main-page/operations';
import { getCategoriesList } from 'redux/Categories/operations';
import { getSearchByNameThunk } from 'redux/Recipes/searchByName/operations';
import useSearchByName from 'hooks/useSearchByName';
import { setQuery } from 'redux/Recipes/searchByName/slice';

export const Test = () => {
  const dispatch = useDispatch();
  const { categories, isLoading, isError } = useCategories();
  const { data, query, limit, page } = useSearchByName();
  const payload = { query: 'beef', page: 5, limit: 4 };

  const [inputValue, setInputValue] = useState('');

  const handleInput = e => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    //if (!categories)
    dispatch(getMainPage(2));
    dispatch(getCategoriesList());

    if (query) {
      console.log('useEffect', query);

      dispatch(getSearchByNameThunk({ query }));
    }
  }, [dispatch, query]);

  useEffect(() => {
    if (data.length > 0) console.log('useeffect data', data);
  }, [data]);

  return (
    <>
      <input value={inputValue} onChange={handleInput}></input>
      <button
        onClick={() => {
          dispatch(setQuery(inputValue));
        }}
      >
        click
      </button>
    </>
  );
};

export default Test;
