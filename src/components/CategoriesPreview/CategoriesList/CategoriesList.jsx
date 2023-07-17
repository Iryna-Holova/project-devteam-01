import { Link } from "react-router-dom";
import { ListItem, CategoryTitle, ButtonContainer, SeeAllButton } from "./CategoriesList.styled";
import { Recipe, RecipeImg, Description, RecipeContainer, List} from "components/RecipeGallery/RecipeGallery.styled";
import IngredientsPlaceholder from '../../../assets/food-default.svg';

const CategoriesList = ({ recipes }) => {
    return (
        <List>
            {recipes && Object.keys(recipes).map(category => (
                <ListItem key={category}>
                    <CategoryTitle>
                        {category}
                    </CategoryTitle>
                    <List>
                        {recipes[category].map(({ _id, title, thumb }, index) => (
                        <Recipe key={index}>
                                <Link to={`/recipe/${_id}`}>
                            <RecipeContainer>
                                <Description>
                                <p>{title}</p>
                                </Description>
                                <RecipeImg src={thumb ? thumb: IngredientsPlaceholder} loading="lazy" alt={title} />
                            </RecipeContainer>
                            </Link>
                        </Recipe>
                        ))}
                    </List>
                    <ButtonContainer>
                        <SeeAllButton to={`/categories/${category}`}>See all</SeeAllButton>
                    </ButtonContainer>
                </ListItem>
            ))}
        </List>
    )
}

export default CategoriesList;
