import styled from 'styled-components';
import backgroundLeft from '../../assets/images/Main/mobile/bg-spinach-left-mob.webp';
import backgroundRight from '../../assets/images/Main/mobile/bg-spinach-right-mobile.webp';
import triangle from '../../assets/svg/MainPage/bg-triangle.svg';

export const MainContainer = styled.div`
    height: 716px;
    background-image: url(${backgroundLeft}), url(${backgroundRight}), url(${triangle});
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: top -150px left, bottom right, right;
`

export const HeroTitle = styled.h1`
    margin-bottom: 14px;
    text-align: center;
    font-size: 60px;
    font-weight: 400;
    line-height: 1.0;
    letter-spacing: -0.3px;
`;

export const HeroTitleGreen = styled.span`
    color: #8BAA36;
`;

export const HeroText = styled.p`
    width: 248px;
    margin: 0 auto;
    margin-bottom: 44px;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: -0.28px;
`
