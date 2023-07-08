import { useEffect, useState } from "react";
import Title from "../../MainTitle/Title.styled";
import { ListItem } from "./CategoriesList.styled";
// TODO: uncomment when merged with main, because deleted buttons folder 
// import { SeeAllButton } from "components/Buttons/Buttons.styled";
import { getRecipesMainAPI } from "api/recipesMain";

const CategoriesList = () => {
    const [recipes, setRecipes] = useState(null);
    useEffect(() => {
        getRecipesMainAPI().then(recipesMain => setRecipes(recipesMain))
    }, [])
    return (
        <ul>
            {recipes && Object.keys(recipes).map(category => (
                <ListItem key={category}>
                    <Title>
                        {category}
                    </Title>
                    {recipes[category].map((recipe => (
                        <div key={recipe._id}>
                            {recipe.title}
                           <img alt="" src={recipe.preview}/> 
                        </div>
                    )))}
                    <button to={`/categories/${category}`}>See all</button>
                </ListItem>
            ))}
        </ul>
    )
}

export default CategoriesList;
