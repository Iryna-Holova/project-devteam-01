import React, {useState, useRef}from 'react';
import categoriesData from '../../data/categories.json';
import RecipeGallery from 'components/RecipeGallery/RecipeGallery';
import { TabsList, Tab } from './CategoriesTabs.styled';
const CategoriesTabs = () => {
  const [selectedCategory, setSelectedCategory] = useState('Beef');
  const [recipes, setRecipes] = useState([]);
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const categoryRecipes = categoriesData.find((item) => item.name === category)?.recipes || [];
    setRecipes(categoryRecipes);
  };

  // Відображення меню зі списком категорій
  return (
    <div>
      <TabsList>
        {categoriesData.map((category) => (
          <Tab
            key={category.name}
            isactive={selectedCategory === category.name }
            onClick={() => handleCategoryChange(category.name)}
          >
            {category.name}
          </Tab>
        ))}
      </TabsList>
      <RecipeGallery selectedCategory={selectedCategory} />
    </div>
  );
        };  

export default CategoriesTabs;
