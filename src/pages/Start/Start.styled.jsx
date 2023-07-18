import { styled } from 'styled-components';

import desktop1x from '../../assets/images/startPage/start-page-desktop-1x.webp';
import desktop2x from '../../assets/images/startPage/start-page-desktop-2x.webp';
import tablet1x from '../../assets/images/startPage/start-page-tablet-1x.webp';
import tablet2x from '../../assets/images/startPage/start-page-tablet-2x.webp';
import mobile1x from '../../assets/images/startPage/start-page-mobile-1x.webp';
import mobile2x from '../../assets/images/startPage/start-page-mobile-2x.webp';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-color: var(--color-accent-secondary);
  background-repeat: no-repeat;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 46.3%,
      rgba(0, 0, 0, 0.35) 72.75%,
      rgba(0, 0, 0, 0) 100%
    ),
    -webkit-image-set(url(${mobile1x}) 1x, url(${mobile2x}) 2x);

  @media (min-width: 768px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 46.3%,
        rgba(0, 0, 0, 0.35) 72.75%,
        rgba(0, 0, 0, 0) 100%
      ),
      -webkit-image-set(url(${tablet1x}) 1x, url(${tablet2x}) 2x);
  }
  @media (min-width: 1440px) {
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 46.3%,
        rgba(0, 0, 0, 0.35) 72.75%,
        rgba(0, 0, 0, 0) 100%
      ),
      -webkit-image-set(url(${desktop1x}) 1x, url(${desktop2x}) 2x);
  }
`;

export const WelcomeWords = styled.h2`
  color: var(--color-start-text);
  font-weight: 600;
  margin-bottom: 14px;
  text-align: center;
  line-height: 24px;
  letter-spacing: -0.48px;
  font-size: 24px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    letter-spacing: -0.56px;
    line-height: 28px;
  }
`;

export const InfoP = styled.p`
  max-width: 305px;
  color: #fafafa;
  text-align: center;

  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    max-width: 505px;
    letter-spacing: -0.36px;
    line-height: 24px;
    font-size: 18px;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 540px;
  }
`;

export const WrapperBut = styled.div`
  display: flex;
  gap: 12px;
  @media screen and (min-width: 768px) {
    gap: 18px;
  }

  & a {
    color: var(--color-start-text);
    padding: 12px 24px;
    border-radius: 24px 44px;
    font-size: 14px;
    font-weight: 400;
    transition: all var(--transition-time) var(--cubic);

    @media screen and (min-width: 768px) {
      padding: 22px 44px;
      font-size: 16px;
    }

    &.reg {
      background-color: var(--color-accent);
      &:hover {
        background-color: var(--color-start-bg);
      }
    }

    &.signin {
      outline: 1px solid var(--color-start-text);

      &:hover {
        background-color: var(--color-start-text);
        outline-color: var(--color-accent);
        color: var(--color-accent);
      }
    }
  }
`;