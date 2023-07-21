import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import RecipeDescription from './AddRecipeForm/RecipeDescription/RecipeDescription';
import RecipeIngredients from './AddRecipeForm/RecipeIngredients/RecipeIngredients';
import RecipePreparation from './AddRecipeForm/RecipePreparation/RecipePreparation';
import { Container, AddRecipeButton, FormStyled } from './AddRecipeForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from 'redux/Categories/selectors';
import { selectIngredients } from 'redux/Ingredients/selectors';
import { getCategoriesList } from '../../redux/Categories/operations';
import { getIngredientsThunk } from 'redux/Ingredients/operations';
import { addOwnRecipe } from '../../services/api/recipes-api/own';

const AddRecipeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(selectCategories);
  const ingredients = useSelector(selectIngredients);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    dispatch(getCategoriesList());
    dispatch(getIngredientsThunk());
  }, [dispatch]);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    category: Yup.string().required('Category is required'),
    description: Yup.string().required('Description is required'),
    time: Yup.string().required('Cooking time is required'),
    ingredients: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('Ingredient name is required'),
        measure: Yup.string().required('Measure is required'),
      })
    ),
    preparation: Yup.string().required('Preparation is required'),
  });

  const handleFormSubmit = async (values) => {

    const ingredientsData = values.ingredients.map((ingredient) => {
      console.dir(ingredient);
      return {id: ingredient._id,
        measure: ingredient.measure,}
    });

    const recipeData = {
      title: values.title,
      category: values.category,
      area: 'none',
      instructions: values.preparation,
      description: values.description,
      thumb: 'none',
      preview: 'none',
      time: values.time.toString(),
      tags: [],
      ingredients: ingredientsData,
    };

    const formData = new FormData();
    formData.append('photo', selectedFile);
    formData.append('recipe', JSON.stringify(recipeData));

    try {
      const response = await addOwnRecipe({ data: formData });
      if (response) {
        console.log('Recipe added successfully:', response);
        navigate('/my');
      } else {
        console.log('Failed to add recipe');
      }
    } catch (error) {
      console.log('Error adding recipe:', error.message);
    }
  };

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    setSelectedFile(file);
  };

  return (
    <Formik
      initialValues={{
        title: '',
        category: null,
        preparation: [],
        description: '',
        time: '',
        ingredients: [],
      }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {formikProps => (
        <Container>
          <FormStyled>
            <RecipeDescription
              categories={categories}
              handleFileChange={handleFileChange}
              selectedFile={selectedFile}
              formikProps={formikProps}
              handleSubmit={formikProps.handleSubmit}
            />
            <RecipeIngredients ingredients={ingredients} />
            <RecipePreparation />
            <AddRecipeButton type="submit" onClick={formikProps.handleSubmit}>Add</AddRecipeButton>
          </FormStyled>
        </Container>
      )}
    </Formik>
  );
};

export default AddRecipeForm;
