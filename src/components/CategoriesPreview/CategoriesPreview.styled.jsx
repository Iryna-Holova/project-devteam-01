import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    margin-bottom: 100px;
    padding-left: 16px;
    padding-right: 16px;
`

export const ButtonContainer = styled.div`
    text-align: center;
`

export const OtherCategoriesButton = styled(Link)`
    text-decoration: none;
    margin-top: 40px;
    padding: 14px 32px;
    display: inline-block;
    background-color: transparent;
    border: 1px solid var(--color-accent);
    border-radius: 24px 44px;
    color: var(--color-footer);

    @media screen and (min-width: 768px) {
        margin-top: 32px;
        padding: 20px 52px;
    }

    @media screen and (min-width: 1440px) {
        margin-top: 14px;
    }

    &:hover,
    &:focus {
        background-color: var(--color-accent);
        color: var(--color-main);
        transition: background-color var(--transition-time) var(--cubic);

    }
`

export const SearchContainer = styled.div`
    position: absolute;
    top: 350px;
    left: 100px;
    margin-left: auto;
    margin-right: auto;
    width: 510px;
`