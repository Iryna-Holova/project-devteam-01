import styled from 'styled-components';
import background from '../../../assets/images/Main/bg-salad/bg-salad-bowl-mobile-1x.webp';
import background2x from '../../../assets/images/Main/bg-salad/bg-salad-bowl-mobile-2x.webp';
import saladTablet from '../../../assets/images/Main/bg-salad/bg-salad-bowl-tablet-1x.webp';
import saladTablet2x from '../../../assets/images/Main/bg-salad/bg-salad-bowl-tablet-2x.webp';
import saladDesk from '../../../assets/images/Main/bg-salad/bg-salad-bowl-desktop-1x.webp';
import saladDesk2x from '../../../assets/images/Main/bg-salad/bg-salad-bowl-desktop-2x.webp';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';


export const Container = styled.div`
    position: sticky;
    margin: 0 auto;
    margin-bottom: 147px;
    background-image: url(${background});
    background-image: -webkit-image-set(
    url(${background}) 1x,
    url(${background2x}) 2x);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 320px;
    height: 296px;

    @media screen and (min-width: 768px) {
        position: relative;
        right: -200px;
        top: -220px;
        margin-bottom: 0px;
        background-image: url(${saladTablet});
        background-image: -webkit-image-set(
        url(${saladTablet}) 1x,
        url(${saladTablet2x}) 2x);
        width: 378px;
        height: 351px;
    }

    @media screen and (min-width: 1440px) {
        background-image: url(${saladDesk});
        background-image: -webkit-image-set(
        url(${saladDesk}) 1x,
        url(${saladDesk2x}) 2x);
        width: 578px;
        height: 539px;
        right: -300px;
        top: -270px;
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
        top: 220px;
        left: 70px;
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
    width: 18px;
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: 0.2px;

    &:hover,
    &:focus {
        transition: background-color var(--transition-time) var(--cubic);
        color: var(--color-accent);
    }

    @media screen and (min-width: 768px) {
        margin-left: 164px;
        margin-right: 4px;
    }

    @media screen and (min-width: 1440px) {
        margin-left: 184px;
    }
`

export const Svg = styled(HiArrowNarrowRight)`
    width: 18px;
    text-align: center;
`