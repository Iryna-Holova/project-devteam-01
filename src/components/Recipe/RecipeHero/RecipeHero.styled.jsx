import styled from 'styled-components';

export const HeroContainer = styled.div`
  text-align: center;
  margin-bottom: 32px;
  padding-top: 144px;
  padding-bottom: 90px;
  background-color: #d8cfbd;
  color: var(--color-footer);

  /* @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
 
  } */

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
    padding-top: 136px;
    padding-bottom: 32px;

    /* @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
    } */
  }

  @media screen and (min-width: 1440px) {
    padding-top: 164px;

    /* @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
    } */
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

export const Time = styled.div`
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
