import styled from 'styled-components';
import Title from "../../MainTitle/Title.styled";


export const CategoryTitle = styled(Title)`
    margin-bottom: 32px;

    @media screen and (min-width: 768px) {
        margin-bottom: 40px;
    }
`

export const ListItem = styled.li`
    list-style: none;
`