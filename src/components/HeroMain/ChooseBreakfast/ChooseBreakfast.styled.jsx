import styled from 'styled-components';
import background from "../../../assets/images/Main/mobile/bg-salad-bowl-mobile.webp";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    width: 320px;
    height: 296px;
`;

export const TextContainer = styled.div`
    position: absolute;
    top: 112px;
    left: 88px;
    width: 225px;
    height: 92px;
    background-color: #FAFAFA;
    border-radius: 8px;
`

export const TextGreen = styled.span`
    color: #8BAA36;
`;

export const Text = styled.p`
    margin-top: 8px;
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 7px;
    text-align: left;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.24px;
`
export const StyledLink = styled(Link)`
    margin-left: 135.5px;
    margin-right: 7.5px;
    color: #3E4462;
    text-decoration: none;
    font-size: 10px;
    line-height: 1.2;
    letter-spacing: 0.2px;
`

export const StyledSvg = styled.svg`
    width: 19px;
    height: 18px;
    cursor: pointer;
    fill: #3E4462;
`
