import styled from 'styled-components';

export const FooterContainer = styled.footer`
  /* height: 348px;

  @media (max-width: 768px) {
    height: 357px;
  }

  @media (max-width: 480px) {
    height: 435px;
  } */
`;

export const FooterContent = styled.div`
  background-color: #22252a;
  padding-top: 28px;
  padding-bottom: 18px;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: #fafafa;

  @media (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 24px;
  }
`;

export const FooterTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 44px;
  /* justify-content: space-between; */
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 72px 175px;
    margin-bottom: 38px;
  }

  @media (min-width: 1440px) {
    align-items: flex-start;
  }
`;

export const FooterText = styled.ul`
  display: none;

  @media (min-width: 768px) {
    display: block;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
    list-style: inside;
  }

  /* @media (max-width: 482px) {
    display: none;
  } */
`;

export const SubscribeButton = styled.button`
  /* background-color: green;
  color: #22252a;
  border: none;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  } */
`;

export const LogoText = styled.div`
  /* color: #fafafa;
  font-weight: bold;
  font-size: 28px;
  line-height: 28px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: left;
    margin-bottom: 24px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 532px) {
    display: flex;
    justify-content: center;
    font-size: 18px;
    line-height: 18px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 28px;
    margin-bottom: 32px;
  } */
`;

export const LogoImage = styled.a`
  /* width: 44px;
  height: 44px;
  background-image: url('путь_к_изображению');
  background-size: cover;
  background-position: center; */
`;

export const FooterLogoText = styled.div`
  /* margin-left: 100px;
  margin-top: 64px;
  margin-bottom: 110px;
  width: 418px;

  @media (max-width: 768px) {
    margin-left: 50px;
    margin-top: 32px;
    padding-bottom: 50px;
    margin-bottom: 0px;
    width: 380px;
  }

  @media (max-width: 532px) {
    margin: 0;
  }

  @media (max-width: 480px) {
    padding-bottom: 0;
  } */
`;

export const FooterNav = styled.div`
  /* margin-top: 64px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin: 0;
  } */
`;

export const Text = styled.li`
  margin-bottom: 12px;
`;

export const FooterBarText = styled.div`
  padding: 28px 0;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  /* margin-top: 32px;
  margin-bottom: 32px;
  font-size: 14px; */
  @media (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 46px;
  }
`;

export const LeftText = styled.span``;

export const RightText = styled.span`
  margin-left: 14px;
`;
