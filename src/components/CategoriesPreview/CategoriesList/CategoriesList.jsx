import { Link } from "react-router-dom";
import Title from "../../MainTitle/Title.styled";
import { ListItem } from "./CategoriesList.styled";
// TODO: uncomment when merged with main, because deleted buttons folder 
// import { SeeAllButton } from "components/Buttons/Buttons.styled";
import { Recipe, RecipeImg, Description, RecipeContainer, List} from "components/RecipeGallery/RecipeGallery.styled";
import IngredientsPlaceholder from '../../../assets/food-default.svg';

const CategoriesList = ({ recipes }) => {
    return (
        <List>
            {recipes && Object.keys(recipes).map(category => (
                <ListItem key={category}>
                    <Title>
                        {category}
                    </Title>
                    <List>
                        {recipes[category].map((recipe => (
                        <Recipe key={recipe._id}>
                            <Link to={recipe._id}>
                            <RecipeContainer>
                                <Description>
                                <p>{recipe.title}</p>
                                </Description>
                                <RecipeImg src={recipe.preview ? recipe.preview : IngredientsPlaceholder} loading="lazy" alt={recipe.title} />
                            </RecipeContainer>
                            </Link>
                        </Recipe>
                        )))}
                    </List>
                    <Link to={`/categories/${category}`}>See all</Link>
                </ListItem>
            ))}
        </List>
    )
}

export default CategoriesList;
