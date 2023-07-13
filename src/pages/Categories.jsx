import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import categories from '../data/categories.json';
import recipesData from '../data/recipes.json';
import CategoriesTabs from '../components/CategoriesTabs/CategoriesTabs';
import RecipeGallery from '../components/RecipeGallery/RecipeGallery';
import MainTitle from 'components/MainTitle/MainTitle';
import useApp from 'hooks/useApp';

const Categories = () => {
  const { categoryName } = useParams();
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();
  const { device } = useApp();
  // переписать на бек
  useEffect(() => {
    const categoryRecipes = recipesData.filter(
      recipe => recipe.category.toLowerCase() === categoryName
    );
    setRecipes(categoryRecipes);
  }, [categoryName]);

  const handleCategoryChange = category => {
    navigate(`/categories/${category.toLowerCase()}`);
  };

  const handleOpenRecipe = id => {
    navigate(`/recipes/${id}`);
  };

  return (
    <>
      <MainTitle>Categories</MainTitle>
      <CategoriesTabs
        categories={categories}
        selectedCategory={categoryName}
        handleCategoryChange={handleCategoryChange}
      />
      <RecipeGallery recipes={recipes} handleOpenRecipe={handleOpenRecipe} />
    </>
  );
};

export default Categories;
