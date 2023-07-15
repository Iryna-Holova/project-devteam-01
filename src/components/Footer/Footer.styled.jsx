import styled from 'styled-components';

export const FooterContainer = styled.footer`
  height: 348px;

  @media (max-width: 768px) {
    height: 357px;
  }

  @media (max-width: 480px) {
    height: 435px;
  }
`;

export const FooterContent = styled.div`
  background-color: #22252a;
  padding-top: 64px;
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
    flex-wrap: nowrap;
  }
`;

export const FooterText = styled.ul`
  display: none;
  font-size: 18px;
  line-height: 24px;
  width: 418px;

  @media (min-width: 768px) {
    display: block;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
    list-style: inside;
  }

  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
  
  }
`;

export const Text = styled.li`
  margin-bottom: 12px;
  /* font-size: 18px; */
  width: 418px;
`;

export const FooterLogoText = styled.p`
margin-left: 12px;
 `;


export const LogoStyles = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  font-size: 28px;
  line-height: 28px;
  font-weight: 700;

  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 32px;
  }
`;

export const FooterBarText = styled.div`
  padding: 28px 0;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 46px;
  }
`;

export const LeftText = styled.span``;

export const RightText = styled.span`
  margin-left: 14px;
`;
