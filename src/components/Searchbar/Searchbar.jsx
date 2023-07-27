import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Input,
  Btn,
  Label,
  Select,
  Option,
  Div,
  Form,
} from './Searchbar.styled';
import { useDispatch } from 'react-redux';
import { getSearchByThunk } from '../../redux/Recipes/SearchBy/operations';
import { SEARCH_BY_TITLE, SEARCH_BY_INGREDIENT } from '../../utils/constants';
import { setQuery } from 'redux/Recipes/SearchBy/slice';
import useSearchBy from 'hooks/useSearchBy';

const  Searchbar = ({ onSubmit, className, searchQuery }) => {
  const { query } = useSearchBy();
  const [value, setValue] = useState(
    searchQuery === undefined ? '' : searchQuery
  );
  const [selectedValue, setSelectedValue] = useState('title');
  const [isTyping, setIsTyping] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();
  // Fix of deployment
  if (searchParams === ',jgcfkyhmgh,gfj,hfv') {
    searchParams = '';
  }
  const dispatch = useDispatch();

  // Функция записывает значение инпута в состояние
  const handleInputChange = ({ target }) => {
    const inputValue = target.value;
    if (target.name === 'value') {
      setSearchParams(`?${selectedValue}=${inputValue}`);
      setValue(inputValue);
      setIsTyping(inputValue !== '');
      dispatch(setQuery({ param: selectedValue, value: inputValue }));
    }
  };

  // Функция записывает в состояние значение селекта
  const handleSelectChange = ({ target }) => {
    const selectValue = target.value;
    setSearchParams(`?${selectValue}=${value}`);
    setSelectedValue(selectValue);
    dispatch(setQuery({ param: selectValue, value: value }));
  };

  useEffect(() => {
    if (query.param !== undefined) {
      setSelectedValue(query.param);
      setSearchParams(`?${query.param}=${query.value || ''}`);
    }

    if (query.value !== undefined) {
      setValue(query.value);
    }
  }, [query.param, query.value, setSearchParams]);
  // Ефект для отправки запроса если пользователь сделает паузу при вводе запроса
  useEffect(() => {
    if (!isTyping || value.trim() === '') {
      return;
    }

    const delayDebounceRequest = setTimeout(() => {
      if (selectedValue === 'ingredients' && value !== '') {
        dispatch(
          getSearchByThunk({ query: value, method: SEARCH_BY_INGREDIENT })
        );
      }

      if (selectedValue === 'title' && value !== '') {
        dispatch(getSearchByThunk({ query: value, method: SEARCH_BY_TITLE }));
      }
    }, 1500);

    return () => clearTimeout(delayDebounceRequest);
  }, [value, selectedValue, isTyping, dispatch]);

  // Отправка введенных значений по клику
  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      return;
    }
    setIsTyping(false);
    onSubmit(value, selectedValue);
  };
  return (
    <>
      <Form>
        <Div>
          <Input
            className={className}
            type="text"
            name="value"
            autoComplete="off"
            autoFocus
            placeholder="Search recipes"
            onChange={handleInputChange}
            value={value}
          />
          <Btn className={className} onClick={handleSubmit} type="submit">
            Search
          </Btn>
        </Div>

        {className !== 'styles-for-main' && (
          <Label>
            Search by:{' '}
            <Select onChange={handleSelectChange} value={selectedValue}>
              <Option name="title" value="title">
                Title
              </Option>
              <Option name="ingredients" value="ingredients">
                Ingredients
              </Option>
            </Select>
          </Label>
        )}
      </Form>
    </>
  );
}

export default Searchbar;