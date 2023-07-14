import styled from 'styled-components';

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  background-color: #22252a;
  justify-content: center;
  padding-bottom: 24px;
  height: 20px;

  /* @media (max-width: 768px) {
    padding-bottom: 24px;

  } */

  @media (max-width: 480px) {
    padding-bottom: 18px;
  }
`;

export const SocialLink = styled.a`
  color: #fafafa;
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:not(:last-child) {
    margin-right: 16px;
  }

  &:hover {
    color: #8BAA36;
    opacity: 1;
  }
`;