import { Container, ButtonContainer, OtherCategoriesButton } from './CategoriesPreview.styled';
import CategoriesList from './CategoriesList/CategoriesList';
const CategoriesPreview = ({recipes}) => {
    return (
        <>
            <Container className="container">
                <CategoriesList recipes={recipes} />
                <ButtonContainer>
                    <OtherCategoriesButton to="/categories/beef">Other categories</OtherCategoriesButton>
                </ButtonContainer>
            </Container>
        </>
    )
}

export default CategoriesPreview;
