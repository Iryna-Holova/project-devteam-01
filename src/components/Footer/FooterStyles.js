import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #22252a;
  height: 348px;

  @media (max-width: 768px) {
    height: 357px;
  }

  @media (max-width: 480px) {
    height: 435px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: #fafafa;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }
`;

export const FooterText = styled.div`
  width: 100%;
  color: #fafafa;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }

  @media (max-width: 482px) {
    display: none;
  }
`;

export const SubscribeButton = styled.button`
  background-color: green;
  color: #22252a;
  border: none;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  }
`;

export const LogoText = styled.div`
  color: #fafafa;
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
  }
`;

export const LogoImage = styled.a`
  width: 44px;
  height: 44px;
  background-image: url('путь_к_изображению');
  background-size: cover;
  background-position: center;
`;

export const FooterLogoText = styled.div`
  margin-left: 100px;
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
  }
`;

export const FooterNav = styled.div`
  margin-top: 64px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Text = styled.li`
  margin-bottom: 12px;
`;

export const FooterBarText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 32px;
  font-size: 14px;
`;

export const LeftText = styled.span`
  margin-right: 28px;
`;

export const RightText = styled.span`
  /* Стили для текста справа */
`;
