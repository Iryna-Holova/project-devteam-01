import React, { useEffect } from 'react';
import { FieldArray, useFormikContext } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredientsThunk } from '../../../../redux/Ingredients/operations';
import { selectIngredients } from '../../../../redux/Ingredients/selectors'

const RecipeIngredients = () => {
    const { values, setFieldValue } = useFormikContext();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIngredientsThunk());
    }, [dispatch]);

    const ingredients = useSelector(selectIngredients);

    // + - buttons
    // const handleRemoveIngredient = (index) => {
    // };

    // const handleAddIngredient = () => {
    // };
    //

    return (
        <div>
            <h2>Ingredients</h2>
            {/* <button type="button" onClick={() => handleRemoveIngredient(index)}>
                -
            </button> */}
            <p>{values.ingredients.length}</p>
            {/* <button type="button" onClick={() => handleAddIngredient()}>
                +
            </button> */}
            <FieldArray
                name="ingredients"
                render={({ push, remove }) => (
                    <>
                        {values.ingredients.map((ingredient, index) => (
                            <div key={index}>
                                <label htmlFor={`ingredients[${index}].name`}>Ingredient Name:</label>
                                <select
                                    id={`ingredients[${index}].name`}
                                    name={`ingredients[${index}].name`}
                                    value={ingredient.name}
                                    onChange={(e) => setFieldValue(`ingredients[${index}].name`, e.target.value)}
                                >
                                    {/* зробити dropdown? */}
                                    {ingredients.map((option) => (
                                        <option key={option._id.$oid} value={option._id.$oid}>
                                            {option.name}
                                        </option>
                                    ))}
                                </select>

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
