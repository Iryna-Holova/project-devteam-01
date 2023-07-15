import { Link } from "react-router-dom";
import { ListItem, CategoryTitle } from "./CategoriesList.styled";
// TODO: uncomment when merged with main, because deleted buttons folder 
// import { SeeAllButton } from "components/Buttons/Buttons.styled";
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
                        {recipes[category].map(({ id, title, thumb }, index) => (
                        <Recipe key={index}>
                                <Link to={`/recipe/${id}`}>
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
                    <Link to={`/categories/${category}`}>See all</Link>
                </ListItem>
            ))}
        </List>
    )
}

export default CategoriesList;
