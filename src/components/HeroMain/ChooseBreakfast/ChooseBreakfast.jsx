import { Container, Text, TextGreen, StyledLink, TextContainer, StyledSvg } from "./ChooseBreakfast.styled";
import arrow from "../../../assets/svg/MainPage/arrow-narrow-right.svg";

const ChooseBreakfast = () => {
    return (
        <Container>
            <TextContainer>
                <Text><TextGreen>Delicious and healthy</TextGreen> way to enjoy a variety of fresh ingredients in one satisfying meal</Text>
                <StyledLink to="/categories/breakfast">
                    See recipes
                    <StyledSvg>
                        <use xlinkHref={`${arrow}`} />
                    </StyledSvg>
                </StyledLink>
            </TextContainer>
        </Container>
    )
}

export default ChooseBreakfast;
