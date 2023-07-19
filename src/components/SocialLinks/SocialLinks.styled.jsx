import styled from 'styled-components';

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const SocialLink = styled.a`
  color: var(--color-accent);
  text-decoration: none;
  transition: color var(--transition-time) var(--cubic);

  @media screen and (min-width: 768px) {
    gap: 18px;
   
  }

  & svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    color: var(--color-secondary);
  }
`;