import { Container, Text, TextGreen, StyledLink, TextContainer, Svg } from "./ChooseBreakfast.styled";

const ChooseBreakfast = () => {
    return (
        <Container>
            <TextContainer>
                <Text><TextGreen>Delicious and healthy</TextGreen> way to enjoy a variety of fresh ingredients in one satisfying meal</Text>
                <StyledLink to="/categories/breakfast">
                    See recipes
                    <Svg/>
                </StyledLink>
            </TextContainer>
        </Container>
    )
}

export default ChooseBreakfast;
