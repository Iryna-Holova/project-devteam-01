import { Container } from "./CategoriesPreview.styled";
import { Link } from "react-router-dom";
import CategoriesList from "./CategoriesList/CategoriesList";
// TODO: uncomment when merged with main, because deleted buttons folder;
// import { OtherCategoriesButton } from "components/Buttons/Buttons.styled";
const CategoriesPreview = () => {
    return (
        <>
            <Container>
                <CategoriesList/>
                <Link to="/categories/seafood">Other categories</Link>
            </Container>
        </>
    )
}

export default CategoriesPreview;