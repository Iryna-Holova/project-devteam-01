import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { getPopularRecipes } from '';

const PopularRecipe = () => {

  useEffect(() => {
    fetchPopularRecipes();
  }, []);

  const fetchPopularRecipes = async () => {
    // try {
    //   const response = await getPopularRecipes();
    //   setRecipes(response.data);
    // } catch (error) {
    //   setError('Failed to fetch popular recipes.');
    // }
  };

  return (
    <div>
      <h2>Popular Recipes</h2>
      {
        {/* error ? (
        <p>{error}</p>) 
        : 
        (<ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </li>
          ))}
        </ul>) */}
        }
    </div>
  );
};

export default PopularRecipe;
