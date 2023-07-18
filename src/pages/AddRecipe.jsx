import MainTitle from "components/MainTitle/MainTitle";
// import RecipeDescription from 'components/AddRecipePage/AddRecipeForm/RecipeDescription/RecipeDescription';
import AddRecipeForm from "../components/AddRecipePage/AddRecipeForm";

// import PopularRecipe from "../components/AddRecipePage/PopularRecipe/PopularRecipe";


const AddRecipe = () => {
  return (
    <>
      <MainTitle>Add recipe page</MainTitle>
      <AddRecipeForm />

     <PopularRecipe />  

    </>
  )
}

export default AddRecipe;
