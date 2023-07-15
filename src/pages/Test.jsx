//import useCategories from 'hooks/useCategories';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
//import { getMainPage } from 'redux/Recipes/main-page/operations';
//import { getCategoriesList } from 'redux/Categories/operations';
//import { getSearchByTitleThunk } from 'redux/Recipes/searchByTitle/operations';
//import useSearchByTitle from 'hooks/useSearchByTitle';
//import { setQuery } from 'redux/Recipes/searchByTitle/slice';
import { setMethod, setQuery } from 'redux/Recipes/SearchBy/slice';
//import { getSearchByCategoryThunk } from 'redux/Recipes/searchByCategory/operations';
import useSearchByCategory from 'hooks/useSearchByCategory';
import useApp from 'hooks/useApp';
import utils from 'utils';
import recipesServices from 'services/api/recipes-api';

import { getIngredientsThunk } from 'redux/Ingredients/operations';
import { SEARCH_BY_INGREDIENT } from 'utils/constants';
import { getSearchByThunk } from 'redux/Recipes/SearchBy/operations';
//import useSearchByTitle from 'hooks/useSearchByTitle';
import useSearchBy from 'hooks/useSearchBy';

export const Test = () => {
  const dispatch = useDispatch();
  // const { categories, isLoading, isError } = useCategories();
  const { query } = useSearchBy();
  const { device } = useApp();

  const {
    //   data: dataByCategory,
    query: queryByCategory,
    //   limit: limitByCategory,
    //  page: pageByCategory,
  } = useSearchByCategory();
  //const payload = { query: 'beef', page: 5, limit: 4 };

  const [inputValue, setInputValue] = useState('');

  const handleInput = e => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    //  console.log('click', inputValue);
    dispatch(setMethod(SEARCH_BY_INGREDIENT));
    dispatch(setQuery(inputValue));
  };

  useEffect(() => {
    //if (!categories)
    // dispatch(getMainPage(2));
    //dispatch(getCategoriesList());
    dispatch(getIngredientsThunk());
    // console.log('useEffect', query, queryByCategory);

    if (query || queryByCategory) {
      //   console.log('useEffect', query, queryByCategory);
      // dispatch(getSearchByTitleThunk({ query: queryByCategory }));
      //dispatch(getSearchByCategoryThunk({ query: queryByCategory }));
      dispatch(getSearchByThunk({ query, method: SEARCH_BY_INGREDIENT }));
    }
  }, [dispatch, query, queryByCategory]);

  // useEffect(() => {
  //   if (data.length > 0) console.log('useeffect data', data);
  // }, [data]);

  useEffect(() => {
    // if (currentDevice !== device) {
    const limit = utils.getPageLimit('main', device);
    recipesServices
      .getRecipesMain({ limit })
      .then(recipesMain => console.log(recipesMain));
    // }
  }, [dispatch, device]);

  return (
    <>
      <input value={inputValue} onChange={handleInput}></input>
      <button onClick={handleClick}>click</button>
      <p>page limit= {utils.getPageLimit('main', device)}</p>
      <p>device= {device}</p>
    </>
  );
};

export default Test;
