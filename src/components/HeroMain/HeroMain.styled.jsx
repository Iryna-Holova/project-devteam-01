import styled from 'styled-components';
import backgroundLeft from '../../assets/images/Main/bg-spinach-left/bg-spinach-left-mob.webp';
import backgroundLeftRetina from '../../assets/images/Main/bg-spinach-left/bg-spinach-left-mob-2x.webp';
import backgroundLeftTablet from '../../assets/images/Main/bg-spinach-left/bg-spinach-left-tablet-1x.webp';
import backgroundLeftTabletRetina from '../../assets/images/Main/bg-spinach-left/bg-spinach-left-tablet-2x.webp';
import backgroundLeftDesk from '../../assets/images/Main/bg-spinach-left/bg-spinach-left-desktop-1x.webp';
import backgroundLeftDeskRetina from '../../assets/images/Main/bg-spinach-left/bg-spinach-left-desktop-2x.webp';
import backgroundRight from '../../assets/images/Main/bg-spinach-right/bg-spinach-right-mobile.webp';
import backgroundRightRetina from '../../assets/images/Main/bg-spinach-right/bg-spinach-right-mobile-2x.webp';
import backgroundRightTablet from '../../assets/images/Main/bg-spinach-right/bg-spinach-right-tablet-1x.webp';
import backgroundRightTabletRetina from '../../assets/images/Main/bg-spinach-right/bg-spinach-right-tablet-2x.webp';
import backgroundRightDesk from '../../assets/images/Main/bg-spinach-right/bg-spinach-right-desktop-1x.webp';
import backgroundRightDeskRetina from '../../assets/images/Main/bg-spinach-right/bg-spinach-right-desktop-2x.webp';
import triangle from '../../assets/svg/MainPage/bg-triangle.svg';
import triangleTablet from '../../assets/svg/MainPage/bg-triangle-tablet.svg';
import triangleDesk from '../../assets/svg/MainPage/bg-triangle-desktop.svg';

export const MainContainer = styled.div`
    background-image: url(${backgroundLeft}), url(${backgroundRight}), url(${triangle});
    background-image: -webkit-image-set(
        url(${backgroundLeft}) 1x,
        url(${backgroundLeftRetina}) 2x,
    );
    background-image: -webkit-image-set(
        url(${backgroundRight}) 1x,
        url(${backgroundRightRetina}) 2x,
    );
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: top 60px left, top 50px right, top 140px right -10px;

    @media screen and (min-width: 768px) {
        background-image: url(${backgroundLeftTablet}), url(${backgroundRightTablet}), url(${triangleTablet});
        background-image: -webkit-image-set(
            url(${backgroundLeftTablet}) 1x,
            url(${backgroundLeftTabletRetina}) 2x,
        );
        background-image: -webkit-image-set(
            url(${backgroundRightTablet}) 1x,
            url(${backgroundRightTabletRetina}) 2x,
        );
        background-position: top 0px left, top -40px right -60px, top -40px right -60px;
    }

    @media screen and (min-width: 1440px) {
        background-image: url(${backgroundLeftDesk}), url(${backgroundRightDesk}),url(${triangleDesk});
        background-image: -webkit-image-set(
            url(${backgroundLeftDesk}) 1x,
            url(${backgroundLeftDeskRetina}) 2x,
        );
        background-image: -webkit-image-set(
            url(${backgroundRightDesk}) 1x,
            url(${backgroundRightDeskRetina}) 2x,
        );
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
        text-align: left;
        width: 704px;
        margin-left: auto;
        margin-right: auto;
        padding-top: 204px;
    }

    @media screen and (min-width: 1440px) {
        margin-left: auto;
        margin-right: auto;
        width: 1240px;
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
    color: var(--color-accent);

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
        width: 362px;
    }

    @media screen and (min-width: 1440px) {
        font-size: 18px;
        letter-spacing: -0.36px;
        width: 465px;
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
