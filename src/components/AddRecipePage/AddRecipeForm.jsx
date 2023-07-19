import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import RecipeDescription from './AddRecipeForm/RecipeDescription/RecipeDescription';
import RecipeIngredients from './AddRecipeForm/RecipeIngredients/RecipeIngredients';
import RecipePreparation from './AddRecipeForm/RecipePreparation/RecipePreparation';
import {
  // Container,
  AddRecipeButton, FormStyled
} from './AddRecipeForm.styled';
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

  const handleFormSubmit = async (values) => {
    const recipeData = {
      title: values.title,
      category: values.category,
      area: 'none',
      instructions: values.preparation,
      description: values.description,
      thumb: 'none',
      preview: 'none',
      time: values.time,
      tags: [],
      ingredients: values.ingredients.map((ingredient) => ({
        id: ingredient.name._id,
        measure: ingredient.measure,
      })),
    };

    const formData = new FormData();
    formData.append('photo', selectedFile);
    formData.append('recipe', JSON.stringify(recipeData));

    try {
      const response = await addOwnRecipe({ data: formData});
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
        category: '',
        preparation: [],
        description: '',
        time: '',
        ingredients: [],
      }}
      onSubmit={handleFormSubmit}
    >
      
        <FormStyled>
          <RecipeDescription
            categories={categories}
            handleFileChange={handleFileChange}
            selectedFile={selectedFile}
          />
          <RecipeIngredients ingredients={ingredients} />
          <RecipePreparation />
          <AddRecipeButton type="submit">Add</AddRecipeButton>
        </FormStyled>
      
    </Formik>
  );
};

export default AddRecipeForm;
