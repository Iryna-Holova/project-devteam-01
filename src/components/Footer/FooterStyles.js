import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #22252a;
  height: 414px;
  padding: 20px;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  height: 100%;
`;

export const FooterText = styled.p`
  margin: 0;
  width: 414px;
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const SubscribeButton = styled.button`
  background-color: #ffffff;
  color: #22252a;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  }
`;

export const SocialLink = styled.a`
  display: inline-block;
  color: #ffffff;
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    opacity: 1;
  }
`;
