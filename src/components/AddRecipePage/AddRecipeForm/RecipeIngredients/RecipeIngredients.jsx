import React, { useEffect } from 'react';
import { FieldArray, useFormikContext } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsThunk } from '../../../../redux/Ingredients/operations';
import { selectIngredients } from '../../../../redux/Ingredients/selectors';
import AsyncSelect from 'react-select/async';

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
    setFieldValue(`ingredients[${index}].name`, selectedOption ? selectedOption : null);
  };

  return (
    <div>
      <h2>Ingredients</h2>
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
                  value={ingredient.name}
                  onChange={(selectedOption) => handleIngredientChange(index, selectedOption)}
                />

                <label htmlFor={`ingredients[${index}].measure`}>Measure:</label>
                <input
                  type="text"
                  id={`ingredients[${index}].measure`}
                  name={`ingredients[${index}].measure`}
                  value={ingredient.measure}
                  onChange={(e) => setFieldValue(`ingredients[${index}].measure`, e.target.value)}
                />

                <button type="button" onClick={() => remove(index)}>
                  X
                </button>
              </div>
            ))}

            <button type="button" onClick={() => push({ name: '', measure: '' })}>
              Add Ingredient
            </button>
          </>
        )}
      />
    </div>
  );
};

export default RecipeIngredients;