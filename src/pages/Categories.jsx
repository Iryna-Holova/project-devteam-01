import React from 'react';
import { useParams } from 'react-router-dom';
import CategoriesTabs from '../components/CategoriesTabs/CategoriesTabs';
import RecipeGallery from '../components/RecipeGallery/RecipeGallery';
import MainTitle from "components/MainTitle/MainTitle";
const Categories = () => {
  const { categoryName } = useParams();

  // Встановлюємо вибрану категорію на основі перенаправлення або значення за замовчуванням
  const selectedCategory = categoryName || 'Beef';

  return (
    <div>
     <CategoriesTabs />
      <RecipeGallery selectedCategory={selectedCategory} />
      <MainTitle
        message={'Categories'}
      />
       </div>
  );
};

export default Categories;
