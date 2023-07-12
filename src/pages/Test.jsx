import useCategories from 'hooks/useCategories';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMainPage } from 'redux/Recipes/main-page/operations';
import { getCategoriesList } from 'redux/Categories/operations';
import { getSearchByNameThunk } from 'redux/Recipes/searchByName/operations';

export const Test = () => {
  const dispatch = useDispatch();
  const { categories, isLoading, isError } = useCategories();

  useEffect(() => {
    //if (!categories)
    // dispatch(getMainPage(2));
    // dispatch(getCategoriesList());
    dispatch(getSearchByNameThunk({ query: 'potat' }));
  }, [dispatch]);

  return <p>test</p>;
};

export default Test;
