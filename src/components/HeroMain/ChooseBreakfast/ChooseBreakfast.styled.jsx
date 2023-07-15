import styled from 'styled-components';
import background from '../../../assets/images/Main/mobile/bg-salad-bowl-mobile.webp';
import saladTablet from '../../../assets/images/Main/tablet/bg-salad-bowl-tablet.webp';
import saladDesk from '../../../assets/images/Main/desktop/bg-salad-bowl-desktop.webp';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    position: sticky;
    margin: 0 auto;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 320px;
    height: 296px;

    @media screen and (min-width: 768px) {
        position: absolute;
        right: 10px;
        top: 150px;
        background-image: url(${saladTablet});
    }

    @media screen and (min-width: 1440px) {
        background-image: url(${saladDesk});
        width: 578px;
        height: 539px;
        right: 150px;
        top: 100px;
    }
`;

export const TextContainer = styled.div`
    position: absolute;
    top: 112px;
    left: 88px;
    width: 225px;
    height: 92px;
    background-color: var(--color-main);
    border-radius: 8px;
    

     @media screen and (min-width: 768px) {
        top: 170px;
        left: 40px;
        width: 260px;
        height: 100px;
     }

     @media screen and (min-width: 1440px) {
        top: 340px;
        left: 330px;
        width: 298px;
        height: 114px;
        
     }
`

export const TextGreen = styled.span`
    color: var(--color-accent);
`;

export const Text = styled.p`
    margin-bottom: 7px;
    text-align: left;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.24px;
    margin-top: 8px;
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 7px;

    @media screen and (min-width: 768px) {
        font-size: 14px;
    }

    @media screen and (min-width: 1440px) {
        margin-top: 16px;
        margin-bottom: 0px;
        margin-left: 16px;
        margin-right: 16px;
        line-height: 1.4;
    }
`
export const StyledLink = styled(Link)`
    margin-left: 135.5px;
    margin-right: 7.5px;
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: 0.2px;

    @media screen and (min-width: 768px) {
        margin-left: 164px;
        margin-right: 4px;
    }

    @media screen and (min-width: 1440px) {
        margin-left: 184px;
    }
`

export const StyledSvg = styled.svg`
    width: 19px;
    height: 18px;
    cursor: pointer;
    fill: #3E4462;
`
