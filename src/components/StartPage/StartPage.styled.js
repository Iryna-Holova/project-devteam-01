import { styled } from 'styled-components';
// import image from '../../assets/images/authNavPage/authNavBackgroundDesk.jpg';

export const WelcomeWords = styled.h2`
  color: #fafafa;
  font-weight: 600;
  margin-bottom: 14px;

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
  height: 100%;
  top: 50%;
  /* background-image: url();
  background-repeat: no-repeat;
  background-size: cover; */
  background:black;
  position: absolute;
  left: 50%;
  gap: 14px;

  transform: translate(-50%, -50%);
  @media screen and (min-width: 768px) {
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


