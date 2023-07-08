import { Container, Text, TextGreen} from "./ChooseBreakfast.styled";
import { Link } from "react-router-dom";

const ChooseBreakfast = () => {
    return (
        <Container>
            <Text><TextGreen>Delicious and healthy</TextGreen> way to enjoy a variety of fresh ingredients in one satisfying meal</Text>
            <Link to="/categories/breakfast">See recipes</Link>
        </Container>
    )
}

export default ChooseBreakfast;
