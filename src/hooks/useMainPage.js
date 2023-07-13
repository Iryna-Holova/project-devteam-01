import { useSelector } from 'react-redux';
import {
  selectMainPage,
  selectMainPageError,
  selectMainPageIsLoading,
} from 'redux/Recipes/main-page/selectors';

const useMainPage = () => {
  const isLoading = useSelector(selectMainPageIsLoading);
  const isError = useSelector(selectMainPageError);
  const mainPage = useSelector(selectMainPage);

  return {
    isLoading,
    isError,
    mainPage,
  };
};

export default useMainPage;
