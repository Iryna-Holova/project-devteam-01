import React, { useEffect } from 'react';
import { FieldArray, useFormikContext, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsThunk } from '../../../../redux/Ingredients/operations';
import { selectIngredients } from '../../../../redux/Ingredients/selectors';
import AsyncSelect from 'react-select/async';
import { SubTitleStyled } from '../RecipePreparation/RecipePreparation.styled';
import { FlexWrapper, StyledListWrapper } from './RecipeIngredients.styled';
const RecipeIngredients = () => {
  const { values, setFieldValue } = useFormikContext();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredientsThunk());
  }, [dispatch]);

  const ingredients = useSelector(selectIngredients);

  const filterIngredients = (inputValue) => {
    return ingredients.filter((ingredient) =>
      ingredient.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadIngredients = (inputValue, callback) => {
    setTimeout(() => {
      const filteredIngredients = filterIngredients(inputValue);
      callback(filteredIngredients);
    }, 1000);
  };

  const handleIngredientChange = (index, selectedOption) => {
    setFieldValue(`ingredients[${index}]`, selectedOption || { id: '', measure: '' });
  };

  return (
    <FlexWrapper>
      <SubTitleStyled>Ingredients</SubTitleStyled>
      <StyledListWrapper>
        <FieldArray
          name="ingredients"
          render={({ push, remove }) => (
            <>
              {values.ingredients.map((ingredient, index) => (
                <div key={index}>
                  <label htmlFor={`ingredients[${index}].name`}>Ingredient Name:</label>
                  <AsyncSelect
                    id={`ingredients[${index}].name`}
                    name={`ingredients[${index}].name`}
                    cacheOptions
                    defaultOptions
                    loadOptions={(inputValue, callback) => loadIngredients(inputValue, callback)}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option}
                    value={ingredient}
                    onChange={(selectedOption) => handleIngredientChange(index, selectedOption)}
                  />

                  <ErrorMessage name={`ingredients[${index}].name`} component="div" />

                  <label htmlFor={`ingredients[${index}].measure`}>Measure:</label>
                  <input
                    type="text"
                    id={`ingredients[${index}].measure`}
                    name={`ingredients[${index}].measure`}
                    value={ingredient.measure}
                    onChange={(e) => setFieldValue(`ingredients[${index}].measure`, e.target.value)}
                  />

                  {/* <ErrorMessage name={`ingredients[${index}].measure`} component="div" /> */}

                  <button type="button" onClick={() => remove(index)}>
                    X
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => push({ id: '', measure: '' })}>
                Add Ingredient
              </button>
            </>
          )}
        />
      </StyledListWrapper>
    </FlexWrapper>
  );
};

export default RecipeIngredients;
