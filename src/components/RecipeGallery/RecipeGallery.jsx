import React, { useEffect, useState } from 'react';
import recipesData from '../../data/recipes.json';
import { RecipeContainer, RecipeImg } from './RecipeGallery.styled';
import {List, Recipe, Description, RecipeNavLink} from './RecipeGallery.styled';
import IngredientsPlaceholder from '../../assets/food-default.svg';
const RecipeGallery = ({ selectedCategory }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = () => {
      const categoryRecipes = recipesData.filter(recipe => recipe.category === selectedCategory);
      setRecipes(categoryRecipes);
    };

    fetchRecipes();
  }, [selectedCategory]);

  return (
      <List>
      {recipes.map((recipe) => (
          <Recipe key={recipe.id}>
            <RecipeNavLink to={`recipe.id`}>
            <RecipeContainer>
            <Description>
              <p>{recipe.title}</p>
              </Description>
              <RecipeImg src={recipe.thumb ? recipe.thumb : IngredientsPlaceholder} loading="lazy" alt={recipe.title} />
              </RecipeContainer>
              </RecipeNavLink>
          </Recipe>
          ))}
      </List>
  );
};

export default RecipeGallery;


