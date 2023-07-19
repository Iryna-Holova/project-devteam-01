import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {Input, Btn,  Label, Select, Option, Div, Form} from './Searchbar.styled'


import { useDispatch } from 'react-redux';
import {getSearchByThunk} from '../../redux/Recipes/SearchBy/operations'
import {SEARCH_BY_TITLE, SEARCH_BY_INGREDIENT} from '../../utils/constants'

  
  
export function Searchbar ({onSubmit, className}) {
    const [value, setValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('title')
    const [isTyping, setIsTyping] = useState(false)
    const location = useLocation()

    const dispatch = useDispatch()
    



// Функция записывает значение инпута в состояние
  const handleInputChange = ({ target }) => {
    const inputValue = target.value
    if (target.name === 'value') {
        
      setValue(inputValue);
      setIsTyping(inputValue !== '');
    }
    };


// Функция записывает в состояние значение селекта  
  const handleSelectChange = ({target}) => {
    const selectValue = target.value
    
    setSelectedValue(selectValue)
    
   }


// Ефект для отправки запроса если пользователь сделает паузу при вводе запроса   
  useEffect(()=> {
    if (!isTyping || value.trim() === '') {
        return;
      }
      
      const delayDebounceRequest = setTimeout(() => {
        if (selectedValue === "ingredients" && value !== "") {
          dispatch(getSearchByThunk({query:value, method:SEARCH_BY_INGREDIENT}))
           
           }
        if (selectedValue === "title" && value !== "") {
          dispatch(getSearchByThunk({query:value, method:SEARCH_BY_TITLE}))
           
         }
      }, 1500)

    return () => clearTimeout(delayDebounceRequest);
  }, [value, selectedValue,isTyping, dispatch ])

  

// Отправка введенных значений по клику  
  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      return;
    }
   
    setIsTyping(false)
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
           <Btn className={className} onClick={handleSubmit} type="submit">Search</Btn>
            </Div>
           
           
            {location.pathname === '/search' && < Label>
            Search by: <Select onChange={handleSelectChange}>
                
                <Option name="title" value="title">Title</Option>
                <Option name="ingredients" value="ingredients">Ingredients</Option>
                
            </Select></Label>}
           
           
          </Form>
        </>
      );
  }


  