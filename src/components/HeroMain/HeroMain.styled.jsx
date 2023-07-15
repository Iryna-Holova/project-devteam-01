import styled from 'styled-components';
import backgroundLeft from '../../assets/images/Main/mobile/bg-spinach-left-mob.webp';
import backgroundLeftRetina from '../../assets/images/Main/mobile/bg-spinach-left-mob-2x.webp';
import backgroundLeftTablet from '../../assets/images/Main/tablet/bg-spinach-left-tablet.webp';
import backgroundLeftDesk from '../../assets/images/Main/desktop/bg-spinach-left-desktop.webp';
import backgroundRight from '../../assets/images/Main/mobile/bg-spinach-right-mobile.webp';
import backgroundRightRetina from '../../assets/images/Main/mobile/bg-spinach-right-mobile-2x.webp';
import backgroundRightTablet from '../../assets/images/Main/tablet/bg-spinach-right-tablet.webp';
import backgroundRightDesk from '../../assets/images/Main/desktop/bg-spinach-right-desktop.webp';
import triangle from '../../assets/svg/MainPage/bg-triangle.svg';
import triangleTablet from '../../assets/svg/MainPage/bg-triangle-tablet.svg';
import triangleDesk from '../../assets/svg/MainPage/bg-triangle-desktop.svg';

export const MainContainer = styled.div`
    background-image: url(${backgroundLeft}), url(${backgroundRight}), url(${triangle});
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: top 60px left, top 50px right, top 190px right;

    @include retina {
        background-image: url(${backgroundLeftRetina}), url(${backgroundRightRetina}), url(${triangle});
    }

    @media screen and (min-width: 768px) {
        background-image: url(${backgroundLeftTablet}), url(${backgroundRightTablet}), url(${triangleTablet});
        background-position: top 0px left, top -40px right -60px, top -40px right -60px;
    }

    @media screen and (min-width: 1440px) {
        background-image: url(${backgroundLeftDesk}), url(${backgroundRightDesk}),url(${triangleDesk});
        background-position:  
    }
`

export const HeroContainer = styled.div`
    margin: 0 auto;
    padding-top: 132px;
    width: 248px;

    @media screen and (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
        text-align: left;
        width: 364px;
        margin-left: 32px;
        padding-top: 204px;
    }

    @media screen and (min-width: 1440px) {
        width: 505px;
        padding-left: 100px;
    }
`

export const HeroTitle = styled.h1`
    margin-bottom: 14px;
    text-align: center;
    font-size: 60px;
    font-weight: 400;
    line-height: 1.0;
    letter-spacing: -0.3px;

    @media screen and (min-width: 768px) {
        margin-bottom: 24px;
        height: 72px;
        font-size: 72px;
        text-align: left;
    }

    @media screen and (min-width: 1440px) {
        margin-bottom: 14px;
        font-size: 100px;
        height: 100px;
    }
`;

export const HeroTitleGreen = styled.span`
    color: #8BAA36;

    @media screen and (min-width: 768px) {
        text-align: left;
    }

    @media screen and (minw-width: 1440px) {
        margin-bottom: 14px;
        font-size: 100px;
        height: 100px;
    }
`;

export const HeroText = styled.p`
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: -0.28px;

    @media screen and (min-width: 768px) {
        text-align: left;
    }

    @media screen and (min-width: 1440px) {
        font-size: 18px;
        letter-spacing: -0.36px;
    }
`

export const NewLine = styled(HeroText)`
    white-space:pre-wrap;
    margin-bottom: 44px;

    
    @media screen and (min-width: 768px) {
        margin-left: 0px;
        margin-bottom: 32px;
    }

    @media screen and (min-width: 1440px) {
        margin: 0;
    }
`
