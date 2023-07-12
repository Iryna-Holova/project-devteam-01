import CategoriesPreview from "components/CategoriesPreview/CategoriesPreview";
import HeroMain from "components/HeroMain/HeroMain";
import { getRecipesMainAPI } from "api/recipesMain";
import { useEffect, useState } from "react";


// import SearchForm from "components/SeachForm/SeachForm";

const Main = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        getRecipesMainAPI().then(recipesMain => setRecipes(recipesMain))
    }, [])
    return (
        <>
            <HeroMain/>
            {/* <SearchForm /> */}
            <CategoriesPreview recipes={recipes} />
        </>
    )
}

export default Main;
