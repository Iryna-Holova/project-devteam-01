import RecipeGallery from "components/RecipeGallery/RecipeGallery";
import { ListItem, CategoryTitle, ButtonContainer, SeeAllButton } from "./CategoriesList.styled";
import { List } from "components/RecipeGallery/RecipeGallery.styled";
import scrollToTop from 'utils/scroll-to-top';

const CategoriesList = ({ recipesByCategory }) => {
    const handleClick = () => {
        scrollToTop();
    }
    return (
        <List>
            {recipesByCategory && Object.keys(recipesByCategory).map(category => (
                <ListItem key={category}>
                    <CategoryTitle>
                        {category}
                    </CategoryTitle>
                    <RecipeGallery recipes={recipesByCategory[category]} />
                    <ButtonContainer>
                        <SeeAllButton to={`/categories/${category}`} onClick={handleClick}>See all</SeeAllButton>
                    </ButtonContainer>
                </ListItem>
            ))}
        </List>
    )
}

export default CategoriesList;
