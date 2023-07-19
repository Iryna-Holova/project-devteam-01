import MainTitle from "components/MainTitle/MainTitle";
import FollowUs from "../../components/AddRecipePage/AddRecipeForm/FollowUs/FollowUs";
import AddRecipeForm from "../../components/AddRecipePage/AddRecipeForm";

 import PopularRecipe from "../../components/AddRecipePage/PopularRecipe/PopularRecipe";
import {
  AddRecipeContainer,FlexWrapper,SideFlexWrapper
} from './AddRecipe.styled';

const AddRecipe = () => {
  return (
    <AddRecipeContainer className="container">
      <FlexWrapper>
       <MainTitle>Add recipe</MainTitle>
      <AddRecipeForm />
      </FlexWrapper>
      <SideFlexWrapper>
        <FollowUs />
        <PopularRecipe />
      </SideFlexWrapper>
    </AddRecipeContainer>
  )
}

export default AddRecipe;
