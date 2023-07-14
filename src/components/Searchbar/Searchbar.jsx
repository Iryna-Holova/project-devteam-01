import { useState, useEffect } from 'react';
import {getIngredientsRecipes} from '../../services/getIngredientsRecipes';
import {getTitleRecipes} from '../../services/getTitleRecipes';
import {Input, Btn, Select, Div, Form} from './Searchbar.styled'

  
  
export function Searchbar ({onSubmit, setTitles, setIngredient, addStatus, addError}) {
    const [value, setValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('title')
    const [isTyping, setIsTyping] = useState(false)
    


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
      addStatus('pending')
      addError(null)
      const delayDebounceRequest = setTimeout(() => {
        if (selectedValue === "ingredients" && value !== "") {
            getIngredientsRecipes(value).then(ingr => {
                setIngredient(ingr); 
                addStatus('resolved')})
                .catch(err => {
                    addError(err.message); 
                    addStatus('rejected')})
           }
        if (selectedValue === "title" && value !== "") {
            getTitleRecipes(value).then(ingr => {
                setTitles(ingr); 
                addStatus('resolved')})
                .catch(err => {
                    addError(err.message); 
                    addStatus('rejected')})
         }
      }, 2000)

    return () => clearTimeout(delayDebounceRequest);
  }, [value, selectedValue,setIngredient, setTitles, addError, addStatus, isTyping ])


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
                type="text"
                name="value"
                autoComplete="off"
                autoFocus
                placeholder="Search recipes"
                onChange={handleInputChange}
                value={value}
              />
           <Btn onClick={handleSubmit} type="submit">Search</Btn>
            </Div>
           
           <label>
            Search by:
           <Select onChange={handleSelectChange}>
                
                <option name="title" value="title">Title</option>
                <option name="ingredients" value="ingredients">Ingredients</option>
                
            </Select>
           </label>
          </Form>
        </>
      );
  }


  