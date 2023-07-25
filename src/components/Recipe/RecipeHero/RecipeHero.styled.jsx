import styled from 'styled-components';

import desktop1x from '../../../assets/images/recipe-hero-bg/my-recipe-hero-desktop-1x.webp';
import desktop2x from '../../../assets/images/recipe-hero-bg/my-recipe-hero-desktop-2x.webp';
import tablet1x from '../../../assets/images/recipe-hero-bg/my-recipe-hero-tablet-1x.webp';
import tablet2x from '../../../assets/images/recipe-hero-bg/my-recipe-hero-tablet-2x.webp';
import mobile1x from '../../../assets/images/recipe-hero-bg/my-recipe-hero-mobile-1x.webp';
import mobile2x from '../../../assets/images/recipe-hero-bg/my-recipe-hero-mobile-2x.webp';

export const HeroContainer = styled.div`
  min-height: 455px;
  position: relative;
  text-align: center;
  margin-bottom: 32px;
  padding-top: 144px;
  padding-bottom: 90px;
  color: #23262a;
  background-color: #e6e6e4;
  background-size: 767px 509px;
  background-position: top center;
  background-repeat: no-repeat;
  background-image: -webkit-image-set(url(${mobile1x}) 1x, url(${mobile2x}) 2x);

  @media screen and (min-width: 768px) {
    min-height: 495px;
    margin-bottom: 50px;
    padding-top: 136px;
    padding-bottom: 32px;
    background-size: 1108px 697px;
    background-image: -webkit-image-set(
      url(${tablet1x}) 1x,
      url(${tablet2x}) 2x
    );
  }

  @media screen and (min-width: 1440px) {
    min-height: 493px;
    padding-top: 164px;
    background-size: 1562px 731px;
    background-position: top center;
    background-image: -webkit-image-set(
      url(${desktop1x}) 1x,
      url(${desktop2x}) 2x
    );
  }

  & a {
    position: absolute;
    top: 90px;
    left: 50%;
    color: inherit;
    transform: translate(-50%, 0);

    :hover {
      color: var(--color-accent);
    }

    & svg {
      transition: color var(--transition-time) var(--cubic);
      height: 30px;
      width: 30px;
    }
  }
`;

export const HeroTitle = styled.h2`
  width: 299px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 18px;
  color: var(--color-accent);

  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.48px;

  @media screen and (min-width: 768px) {
    width: 506px;
    margin-bottom: 24px;
    font-size: 44px;
    line-height: 44px;
    letter-spacing: -0.88px;
  }

  @media screen and (min-width: 1440px) {
    width: 656px;
  }
`;

export const HeroText = styled.p`
  margin-right: auto;
  margin-left: auto;
  width: 299px;
  margin-bottom: 24px;

  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    width: 506px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.36px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
    width: 656px;
  }
`;

export const HeroBtn = styled.button`
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: 1px solid var(--color-accent);
  border-radius: 30px 80px;
  padding: 10px 18px;
  margin-bottom: 42px;

  font-family: Poppins;
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;

  transition: all var(--transition-time) var(--cubic);

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
    font-size: 16px;
    line-height: 24px;
    padding: 18px 44px;
    border: 2px solid var(--color-accent);
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
  }

  &:hover {
    background-color: var(--color-accent);
    color: var(--color-start-text);
  }

  &.active {
    background-color: var(--color-accent);
    color: var(--color-start-text);
    &:hover {
      background-color: transparent;
      color: var(--color-footer);
    }
  }
`;

export const Time = styled.p`
  display: flex;
  gap: 4px;
  justify-content: center;
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.24px;

  > svg {
    width: 14px;
    height: 14px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
