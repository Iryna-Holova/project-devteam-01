import useCategories from 'hooks/useCategories';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMainPage } from 'redux/Recipes/main-page/operations';
import { getCategoriesList } from 'redux/Categories/operations';
import { getSearchByNameThunk } from 'redux/Recipes/searchByName/operations';
import useSearchByName from 'hooks/useSearchByName';
//import { setQuery } from 'redux/Recipes/searchByName/slice';
import { setQuery } from 'redux/Recipes/searchByCategory/slice';
import { getSearchByCategoryThunk } from 'redux/Recipes/searchByCategory/operations';
import useSearchByCategory from 'hooks/useSearchByCategory';

export const Test = () => {
  const dispatch = useDispatch();
  const { categories, isLoading, isError } = useCategories();
  const { data, query, limit, page } = useSearchByName();
  const {
    data: dataByCategory,
    query: queryByCategory,
    limit: limitByCategory,
    page: pageByCategory,
  } = useSearchByCategory();
  //const payload = { query: 'beef', page: 5, limit: 4 };

  const [inputValue, setInputValue] = useState('');

  const handleInput = e => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    console.log('click', inputValue);
    dispatch(setQuery(inputValue));
  };

  useEffect(() => {
    //if (!categories)
    // dispatch(getMainPage(2));
    // dispatch(getCategoriesList());
    console.log('useEffect', query, queryByCategory);

    if (query || queryByCategory) {
      console.log('useEffect', query, queryByCategory);

      //  dispatch(getSearchByNameThunk({ query }));
      dispatch(getSearchByCategoryThunk({ query: queryByCategory }));
    }
  }, [dispatch, query, queryByCategory]);

  useEffect(() => {
    if (data.length > 0) console.log('useeffect data', data);
  }, [data]);

  return (
    <>
      <input value={inputValue} onChange={handleInput}></input>
      <button onClick={handleClick}>click</button>
    </>
  );
};

export default Test;
