import { Link } from 'react-router-dom';
import styled from 'styled-components';

import saladMobile from '../../../assets/images/Main/bg-salad/bg-salad-bowl-mobile-1x.webp';
import saladMobile2x from '../../../assets/images/Main/bg-salad/bg-salad-bowl-mobile-2x.webp';
import saladTablet from '../../../assets/images/Main/bg-salad/bg-salad-bowl-tablet-1x.webp';
import saladTablet2x from '../../../assets/images/Main/bg-salad/bg-salad-bowl-tablet-2x.webp';
import saladDesk from '../../../assets/images/Main/bg-salad/bg-salad-bowl-desktop-1x.webp';
import saladDesk2x from '../../../assets/images/Main/bg-salad/bg-salad-bowl-desktop-2x.webp';

export const Container = styled.div`
  position: relative;
  margin-bottom: 24px;
  background-image: -webkit-image-set(
    url(${saladMobile}) 1x,
    url(${saladMobile2x}) 2x
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  max-width: 100%;
  width: 320px;
  height: 296px;

  @media screen and (min-width: 768px) {
    order: 1;
    margin-bottom: 0;
    margin-right: -32px;
    background-image: -webkit-image-set(
      url(${saladTablet}) 1x,
      url(${saladTablet2x}) 2x
    );
    width: 378px;
    height: 351px;
  }

  @media screen and (min-width: 1440px) {
    background-image: -webkit-image-set(
      url(${saladDesk}) 1x,
      url(${saladDesk2x}) 2x
    );
    background-size: 578px 539px;
    background-position: left center;
    margin: 0;
    width: 662px;
    height: 539px;
  }
`;

export const TextContainer = styled.div`
  background-color: var(--color-secondary);
  position: absolute;
  padding: 8px;
  top: 113px;
  right: 7px;
  max-width: 100%;
  width: 225px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 12px;
    top: 213px;
    right: 0;
    left: 75px;
    width: 260px;
  }

  @media screen and (min-width: 1440px) {
    padding: 16px;
    top: 336px;
    left: 342px;
    width: 298px;
  }
`;

export const Text = styled.p`
  color: var(--color-text-secondary);
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.24px;

  > span {
    color: var(--color-accent);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    line-height: 20px;
  }
`;

export const StyledLink = styled(Link)`
  color: var(--color-text-secondary);
  text-decoration: none;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.2px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: end;
  transition: color var(--transition-time) var(--cubic);

  &:hover,
  &:focus {
    color: var(--color-accent);
  }

  > svg {
    width: 18px;
    height: 18px;
  }
`;

export const StyledArrow = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    bottom: -60px;
    left: 115px;
    transform: rotate(8deg);
  }

  @media screen and (min-width: 1440px) {
    bottom: -20px;
    left: 380px;
    transform: rotate(0deg);
  }
`;
