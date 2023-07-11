import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import categories from '../data/categories.json';
import recipesData from '../data/recipes.json';
import CategoriesTabs from '../components/CategoriesTabs/CategoriesTabs';
import RecipeGallery from '../components/RecipeGallery/RecipeGallery';
import MainTitle from 'components/MainTitle/MainTitle';

const Categories = () => {
  const { categoryName } = useParams();
  const [recipes, setRecipes] = useState([]);

  // переписать на бек
  useEffect(() => {
      const categoryRecipes = recipesData.filter(
        recipe => recipe.category.toLowerCase() === categoryName
      );
      setRecipes(categoryRecipes);
  }, [categoryName]);

  const handleCategoryChange = category => {
    // написать код для смены url
    console.log('category change')
  };

  const handleOpenRecipe = id => {
    // написать код для перехода на страницу рецепта
    console.log('open recipe')
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
