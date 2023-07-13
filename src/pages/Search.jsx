import MainTitle from 'components/MainTitle/MainTitle';

import { getIngredientsRecipes } from '../services/getIngredientsRecipes';
import { getTitleRecipes } from '../services/getTitleRecipes';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import img from '../assets/images/empty-img.png';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedValue, setSelectedValue] = useState('title');
  const [title, setTitle] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [status, setStatus] = useState('idl');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchValue === '') {
      return;
    }
    setStatus('pending');
    setError(null);

    if (selectedValue === 'ingredients' && searchValue !== '') {
      getIngredientsRecipes(searchValue)
        .then(ingr => {
          setIngredients(ingr);
          setStatus('resolved');
        })
        .catch(err => {
          setError(err.message);
          setStatus('rejected');
        });
    }
    if (selectedValue === 'title' && searchValue !== '') {
      getTitleRecipes(searchValue)
        .then(ingr => {
          setTitle(ingr);
          setStatus('resolved');
        })
        .catch(err => {
          setError(err.message);
          setStatus('rejected');
        });
    }
  }, [searchValue, selectedValue]);

  // Функция записывает полученные значения из SearchBar в стейт
  const formOnsubmitHandler = (value, selectValue) => {
    if (searchValue !== value) {
      setSearchValue(value);
    }

    if (selectedValue !== selectValue) {
      setSelectedValue(selectValue);
    }
  };
  console.log(title);
  console.log(ingredients);
  console.log(error); // Just for build

  return (
    <MainTitle>
      <Searchbar
        setTitles={setTitle}
        setIngredient={setIngredients}
        addStatus={setStatus}
        addError={setError}
        onSubmit={formOnsubmitHandler}
      />
      {status === 'resolved' && <p>Completed</p>}
      {status === 'pending' && <p>...</p>}
      {status === 'rejected' && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <img src={img} alt="Корзина с фруктами" width="350" />
          <p>Try looking for something else..</p>
        </div>
      )}
    </MainTitle>
  );
};

export default Search;
