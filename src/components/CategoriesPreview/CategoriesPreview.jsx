import CategoriesList from './CategoriesList/CategoriesList';
import { Container, ButtonContainer, OtherCategoriesButton } from './CategoriesPreview.styled';

const CategoriesPreview = ({recipesByCategory}) => {
    return (
        <>
            <Container className="container">
                <CategoriesList recipesByCategory={recipesByCategory} />
                <ButtonContainer>
                    <OtherCategoriesButton to="/categories/Beef">Other categories</OtherCategoriesButton>
                </ButtonContainer>
            </Container>
        </>
    )
}

export default CategoriesPreview;
