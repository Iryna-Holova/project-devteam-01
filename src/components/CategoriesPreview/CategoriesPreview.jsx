import { Container } from "./CategoriesPreview.styled";
import CategoriesList from "./CategoriesList/CategoriesList";
// TODO: uncomment when merged with main, because deleted buttons folder 
// import { OtherCategoriesButton } from "components/Buttons/Buttons.styled";
const CategoriesPreview = () => {
    return (
        <>
            <Container>
                <CategoriesList/>
                <button to="/categories/seafood">Other categories</button>
            </Container>
        </>
    )
}

export default CategoriesPreview;
