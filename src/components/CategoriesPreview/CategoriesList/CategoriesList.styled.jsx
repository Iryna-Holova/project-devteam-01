import styled from 'styled-components';
import { Link } from "react-router-dom";


export const CategoryTitle = styled.h3`
    padding-top: 64px;
    color: var(--color-text-primary);
    font-size: 28px;
    font-weight: 600;
    line-height: 1.0;
    letter-spacing: -0.56px;
    margin-bottom: 32px;

    @media screen and (min-width: 768px) {
        padding-top: 0px;
        margin-bottom: 40px;
        font-size: 44px;
        letter-spacing: -0.88px;
    }
`

export const ListItem = styled.li`
    list-style: none;
`

export const ButtonContainer = styled.div`
    text-align: right;
`

export const SeeAllButton = styled(Link)`
    display: inline-block;
    margin-top: 24px;
    padding: 10px 24px;
    background-color: #8AA936;
    color: var(--color-main);
    text-decoration: none;
    text-align: center;
    border-radius: 6px;
    line-height: 1.2;

    &:hover,
    &:focus {
        background-color: var(--color-footer);
    }
`