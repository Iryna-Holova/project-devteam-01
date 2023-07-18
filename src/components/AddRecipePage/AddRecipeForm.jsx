import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import RecipeDescription from './AddRecipeForm/RecipeDescription/RecipeDescription';
import RecipeIngredients from './AddRecipeForm/RecipeIngredients/RecipeIngredients';
import RecipePreparation from './AddRecipeForm/RecipePreparation/RecipePreparation';
import { Container, AddRecipeButton } from './AddRecipeForm.styled';
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
    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('category', values.category);
    formData.append('instructions', JSON.stringify(values.preparation));
    formData.append('description', values.description);
    formData.append('thumb', selectedFile); // Add thumb file here
    formData.append('preview', ''); // Add preview file here if available
    formData.append('time', values.time);
    formData.append('tags', JSON.stringify([]));
    values.ingredients.forEach((ingredient, index) => {
      formData.append(`ingredients[${index}].id`, ingredient.name);
      formData.append(`ingredients[${index}].measure`, ingredient.measure);
    });

    // Це для того щоб відобразити в консолі що передається в форм дата
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
    // Це для того щоб відобразити в консолі що передається в форм дата


    try {
      const response = await addOwnRecipe({ formData });
      if (response) {
        console.log('Recipe added successfully:', response);
        navigate('/my'); // Redirect to MyRecipes page
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
      <Container>
        <Form>
          <RecipeDescription
            categories={categories}
            handleFileChange={handleFileChange}
            selectedFile={selectedFile}
          />
          <RecipeIngredients ingredients={ingredients} />
          <RecipePreparation />
          <AddRecipeButton type="submit">Add</AddRecipeButton>
        </Form>
      </Container>
    </Formik>
  );
};

export default AddRecipeForm;
