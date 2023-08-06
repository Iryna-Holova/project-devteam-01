import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setPage, setQuery } from 'redux/Recipes/SearchBy/slice';

import {
  Form,
  InputWrapper,
  Input,
  Btn,
  Label,
  Select,
  Option,
} from './Searchbar.styled';

import useDebounce from 'hooks/useDebounce';

const Searchbar = ({ onSubmit, className, searchQuery }) => {
  const [value, setValue] = useState(
    searchQuery === undefined ? '' : searchQuery
  );
  const [selectedValue, setSelectedValue] = useState('title');

  let [searchParams, setSearchParams] = useSearchParams();
  // Fix of deployment
  if (searchParams === ',jgcfkyhmgh,gfj,hfv') {
    searchParams = '';
  }
  const dispatch = useDispatch();

  const debouncedSetQuery = useDebounce(() => {
    dispatch(setQuery({ param: selectedValue, value }));
    dispatch(setPage(1));
  }, 1500);

  // Функция записывает значение инпута в состояние
  const handleInputChange = ({ target }) => {
    const inputValue = target.value;

    if (target.name === 'value') {
      setSearchParams(`?${selectedValue}=${inputValue}`);
      setValue(inputValue);

      debouncedSetQuery();
    }
  };

  // Функция записывает в состояние значение селекта
  const handleSelectChange = ({ target }) => {
    const selectValue = target.value;
    setSearchParams(`?${selectValue}=${value}`);
    setSelectedValue(selectValue);
    dispatch(setQuery({ param: selectValue, value: value }));
    dispatch(setPage(1));
  };

  // Отправка введенных значений по клику
  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      return;
    }
    //   setIsTyping(false);
    onSubmit(value, selectedValue);
  };
  return (
    <>
      <Form>
        <InputWrapper>
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
        </InputWrapper>

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
};

export default Searchbar;
