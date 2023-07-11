import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "../../MainTitle/Title.styled";
import { ListItem } from "./CategoriesList.styled";
// TODO: uncomment when merged with main, because deleted buttons folder 
// import { SeeAllButton } from "components/Buttons/Buttons.styled";
import { getRecipesMainAPI } from "api/recipesMain";
import { Recipe, RecipeImg, Description, RecipeContainer, List} from "components/RecipeGallery/RecipeGallery.styled";
import IngredientsPlaceholder from '../../../assets/food-default.svg';

const CategoriesList = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        getRecipesMainAPI().then(recipesMain => setRecipes(recipesMain))
    }, [])
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
                    <button to={`/categories/${category}`}>See all</button>
                </ListItem>
            ))}
        </List>
    )
}

export default CategoriesList;
