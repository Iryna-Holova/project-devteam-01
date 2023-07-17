import { styled } from 'styled-components';
import desktop1x from '../../assets/images/startPage/desctop.webp';
import desktop2x from '../../assets/images/startPage/desctop2x.webp';
import tablet1x from '../../assets/images/startPage/tablet.webp';
import tablet2x from '../../assets/images/startPage/tablet2x.webp';
import mobile1x from '../../assets/images/startPage/mobile.webp';
import mobile2x from '../../assets/images/startPage/mobile2x.webp';

export const WelcomeWords = styled.h2`
  color: #fafafa;
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

export const Wrapper = styled.div`
  padding: 0 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  transform: translate(-50%, -50%);
  height: 100%;
  top: 50%; 
  background-position: center;
  background-size: cover;
  position: absolute;
  left: 50%;
  gap: 14px;
  background-color: var(--color-accent-secondary); /* Додайте колір фону, який ви бажаєте використовувати */
  
  background-repeat: no-repeat;
  background-image: 
    linear-gradient(180deg, rgba(0, 0, 0, 0.60) 46.30%, rgba(0, 0, 0, 0.35) 72.75%, rgba(0, 0, 0, 0.00) 100%),
    url(${desktop1x});

  @media (max-width: 767px) {
    background-image: 
      linear-gradient(180deg, rgba(0, 0, 0, 0.60) 46.30%, rgba(0, 0, 0, 0.35) 72.75%, rgba(0, 0, 0, 0.00) 100%),
      url(${mobile1x});
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    background-image: 
      linear-gradient(180deg, rgba(0, 0, 0, 0.60) 46.30%, rgba(0, 0, 0, 0.35) 72.75%, rgba(0, 0, 0, 0.00) 100%),
      url(${tablet1x});
  }

  @media (min-width: 768px) and (max-width: 1439px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (max-width: 1439px) and (min--moz-device-pixel-ratio: 2),
    (min-width: 768px) and (max-width: 1439px) and (-o-min-device-pixel-ratio: 2/1),
    (min-width: 768px) and (max-width: 1439px) and (min-device-pixel-ratio: 2),
    (min-width: 768px) and (max-width: 1439px) and (min-resolution: 144dpi) {
    background-image: 
      linear-gradient(180deg, rgba(0, 0, 0, 0.60) 46.30%, rgba(0, 0, 0, 0.35) 72.75%, rgba(0, 0, 0, 0.00) 100%),
      url(${tablet2x});
  }

  @media (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: 
      linear-gradient(180deg, rgba(0, 0, 0, 0.60) 46.30%, rgba(0, 0, 0, 0.35) 72.75%, rgba(0, 0, 0, 0.00) 100%),
      url(${mobile2x});
  }

  @media (min-width: 1440px) {
    background-image: 
      linear-gradient(180deg, rgba(0, 0, 0, 0.60) 46.30%, rgba(0, 0, 0, 0.35) 72.75%, rgba(0, 0, 0, 0.00) 100%),
      url(${desktop2x});
  }

  @media (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min--moz-device-pixel-ratio: 2),
    (min-width: 1440px) and (-o-min-device-pixel-ratio: 2/1),
    (min-width: 1440px) and (min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 144dpi) {
    background-image: 
      linear-gradient(180deg, rgba(0, 0, 0, 0.60) 46.30%, rgba(0, 0, 0, 0.35) 72.75%, rgba(0, 0, 0, 0.00) 100%),
      url(${desktop2x});
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
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    max-width: 505px;
    letter-spacing: -0.36px;
    line-height: 24px;
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 540px;
  }
`;

export const WrapperBut = styled.div`
  display: flex;
  gap: 18px;
`;
