//import useCategories from 'hooks/useCategories';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
//import { getMainPage } from 'redux/Recipes/main-page/operations';
//import { getCategoriesList } from 'redux/Categories/operations';
//import { getSearchByTitleThunk } from 'redux/Recipes/searchByTitle/operations';
//import useSearchByTitle from 'hooks/useSearchByTitle';
//import { setQuery } from 'redux/Recipes/searchByTitle/slice';
// import { setMethod, setQuery } from 'redux/Recipes/SearchBy/slice';
//import { getSearchByCategoryThunk } from 'redux/Recipes/searchByCategory/operations';
// import useSearchByCategory from 'hooks/useSearchByCategory';
import useApp from 'hooks/useApp';
import utils from 'utils';
import recipesServices from 'services/api/recipes-api';

// import { getIngredientsThunk } from 'redux/Ingredients/operations';
// import { SEARCH_BY_INGREDIENT } from 'utils/constants';
// import { getSearchByThunk } from 'redux/Recipes/SearchBy/operations';
//import useSearchByTitle from 'hooks/useSearchByTitle';
// import useSearchBy from 'hooks/useSearchBy';
// import {
//   addToFavoriteRecipesThunk,
//   getFavoriteRecipesThunk,
//   removeFromFavoriteRecipesThunk,
// } from 'redux/Recipes/favorite/operations';

export const Test = () => {
  const dispatch = useDispatch();
  // const { categories, isLoading, isError } = useCategories();
  // const { query } = useSearchBy();
  const { device } = useApp();

  // const {
  //   //   data: dataByCategory,
  //   query: queryByCategory,
  //   //   limit: limitByCategory,
  //   //  page: pageByCategory,
  // } = useSearchByCategory();
  //const payload = { query: 'beef', page: 5, limit: 4 };

  const [inputValue, setInputValue] = useState('');

  // const rec = {
  //   _id: {
  //     $oid: '6462a8f74c3d0ddd28897fbc',
  //   },
  //   title: 'Mediterranean Pasta Salad',
  //   category: 'Seafood',
  //   area: 'Italian',
  //   instructions:
  //     'Bring a large saucepan of salted water to the boil\r\nAdd the pasta, stir once and cook for about 10 minutes or as directed on the packet.\r\nMeanwhile, wash the tomatoes and cut into quarters. Slice the olives. Wash the basil.\r\nPut the tomatoes into a salad bowl and tear the basil leaves over them. Add a tablespoon of olive oil and mix.\r\nWhen the pasta is ready, drain into a colander and run cold water over it to cool it quickly.\r\nToss the pasta into the salad bowl with the tomatoes and basil.\r\nAdd the sliced olives, drained mozzarella balls, and chunks of tuna. Mix well and let the salad rest for at least half an hour to allow the flavours to mingle.\r\nSprinkle the pasta with a generous grind of black pepper and drizzle with the remaining olive oil just before serving.',
  //   description:
  //     'A salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice.',
  //   thumb: 'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg',
  //   preview:
  //     'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560402/mwtf7uqrnsxvlpjqtslc.jpg',
  //   time: '27',
  //   youtube: 'https://www.youtube.com/watch?v=e52IL8zYmaE',
  //   tags: ['Pasta', 'Baking'],
  //   ingredients: [
  //     {
  //       id: '640c2dd963a319ea671e3724',
  //       measure: '200 g',
  //     },
  //     {
  //       id: '640c2dd963a319ea671e3663',
  //       measure: '250 g',
  //     },
  //     {
  //       id: '640c2dd963a319ea671e36dd',
  //       measure: '1  bunch',
  //     },
  //     {
  //       id: '640c2dd963a319ea671e36cf',
  //       measure: '350 g',
  //     },
  //     {
  //       id: '640c2dd963a319ea671e36cd',
  //       measure: '3  tablespoons',
  //     },
  //     {
  //       id: '640c2dd963a319ea671e36f3',
  //       measure: '40 g',
  //     },
  //     {
  //       id: '640c2dd963a319ea671e3781',
  //       measure: '200 g',
  //     },
  //     {
  //       id: '640c2dd963a319ea671e375e',
  //       measure: 'to taste',
  //     },
  //     {
  //       id: '640c2dd963a319ea671e373f',
  //       measure: 'to taste',
  //     },
  //   ],
  //   favorite: [
  //     {
  //       _userId: {
  //         $oid: '64acfa3cd9029d47332c6f63',
  //       },
  //     },
  //   ],
  // };

  const handleInput = e => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    //  console.log('click', inputValue);
    //dispatch(setMethod(SEARCH_BY_INGREDIENT));
    //dispatch(setQuery(inputValue));
    //dispatch(addToFavoriteRecipesThunk(rec));
    // dispatch(addToFavoriteRecipesThunk(rec));
    // dispatch(getFavoriteRecipesThunk({}));
    //dispatch(removeFromFavoriteRecipesThunk(rec._id));
  };

  // useEffect(() => {
  //   //if (!categories)
  //   // dispatch(getMainPage(2));
  //   //dispatch(getCategoriesList());
  //   //dispatch(getIngredientsThunk());
  //   //dispatch(getFavoriteRecipesThunk({}));
  //   //dispatch(addToFavoriteRecipesThunk(rec));
  //  // dispatch(removeFromFavoriteRecipesThunk(rec._id));
  //   // console.log('useEffect', query, queryByCategory);

  // //  if (query || queryByCategory) {
  //     //   console.log('useEffect', query, queryByCategory);
  //     // dispatch(getSearchByTitleThunk({ query: queryByCategory }));
  //     //dispatch(getSearchByCategoryThunk({ query: queryByCategory }));
  //     //dispatch(getSearchByThunk({ query, method: SEARCH_BY_INGREDIENT }));
  //   }
  // }, [dispatch, query, queryByCategory, rec]);

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
