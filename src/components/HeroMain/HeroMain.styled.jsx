import styled from 'styled-components';
import backgroundLeft from '../../assets/images/Main/bg-spinach-left/bg-spinach-left-mob.webp';
import backgroundLeft2x from '../../assets/images/Main/bg-spinach-left/bg-spinach-left-mob-2x.webp';
import backgroundLeftTablet from '../../assets/images/Main/bg-spinach-left/bg-spinach-left-tablet-1x.webp';
import backgroundLeftTablet2x from '../../assets/images/Main/bg-spinach-left/bg-spinach-left-tablet-2x.webp';
import backgroundLeftDesk from '../../assets/images/Main/bg-spinach-left/bg-spinach-left-desktop-1x.webp';
import backgroundLeftDesk2x from '../../assets/images/Main/bg-spinach-left/bg-spinach-left-desktop-2x.webp';
import backgroundRight from '../../assets/images/Main/bg-spinach-right/bg-spinach-right-mobile.webp';
import backgroundRight2x from '../../assets/images/Main/bg-spinach-right/bg-spinach-right-mobile-2x.webp';
import backgroundRightTablet from '../../assets/images/Main/bg-spinach-right/bg-spinach-right-tablet-1x.webp';
import backgroundRightTablet2x from '../../assets/images/Main/bg-spinach-right/bg-spinach-right-tablet-2x.webp';
import backgroundRightDesk from '../../assets/images/Main/bg-spinach-right/bg-spinach-right-desktop-1x.webp';
import backgroundRightDesk2x from '../../assets/images/Main/bg-spinach-right/bg-spinach-right-desktop-2x.webp';
import triangle from '../../assets/svg/MainPage/bg-triangle.svg';
import triangleTablet from '../../assets/svg/MainPage/bg-triangle-tablet.svg';
import triangleDesk from '../../assets/svg/MainPage/bg-triangle-desktop.svg';

export const MainContainer = styled.div`
  padding-top: 132px;
  background-image: -webkit-image-set(
      url(${backgroundLeft}) 1x,
      url(${backgroundLeft2x}) 2x
    ),
    -webkit-image-set(url(${backgroundRight}) 1x, url(${backgroundRight2x}) 2x),
    url(${triangle});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: top 48px left, top 54px right, top 143px right;

  @media screen and (min-width: 768px) {
    padding-top: 159px;
    background-image: -webkit-image-set(
        url(${backgroundLeftTablet}) 1x,
        url(${backgroundLeftTablet2x}) 2x
      ),
      -webkit-image-set(url(${backgroundRightTablet}) 1x, url(${backgroundRightTablet2x})
            2x),
      url(${triangleTablet});
    background-position: top left, top right, top right;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 126px;
    background-image: -webkit-image-set(
        url(${backgroundLeftDesk}) 1x,
        url(${backgroundLeftDesk2x}) 2x
      ),
      -webkit-image-set(url(${backgroundRightDesk}) 1x, url(${backgroundRightDesk2x})
            2x),
      url(${triangleDesk});
  }
`;

export const HeroContainer = styled.div`
  margin-bottom: 147px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 202px;
    flex-wrap: wrap;
    height: 351px;
    justify-content: center;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 235px;
    height: 539px;
    gap: 0 68px;
  }
`;

export const HeroTextContainer = styled.div`
  margin-bottom: 44px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    order: -1;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    align-items: start;
    margin-bottom: 50px;
  }
`;

export const HeroTitle = styled.h1`
  color: var(--color-text-primary);
  margin-bottom: 14px;
  text-align: center;
  font-size: 60px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.3px;

  > span {
    color: var(--color-accent);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 72px;
    text-align: left;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 14px;
    font-size: 100px;
  }
`;

export const HeroText = styled.p`
  color: var(--color-text-primary);
  max-width: 248px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    text-align: left;
    max-width: 362px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    letter-spacing: -0.36px;
    max-width: 465px;
  }
`;
