import MainTitle from 'components/MainTitle/MainTitle';
import useOwnRecipes from 'hooks/useOwnRecipes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getOwnRecipesThunk } from 'redux/Recipes/own/operations';

const MyRecipes = () => {
  const dispatch = useDispatch();
  const { status } = useOwnRecipes();

  useEffect(() => {
    dispatch(getOwnRecipesThunk({}));
  }, [dispatch]);

  return <MainTitle>My Recipes page</MainTitle>;
};

export default MyRecipes;
