import styled from 'styled-components';

export const HeaderContainer = styled.header`
  z-index: 100;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-icons);

  position: absolute;
  top: 18px;
  left: 50%;
  transform: translate(-50%, 0);
  @media screen and (min-width: 1440px) {
    top: 14px;
  }
`;

export const HeaderContainerStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 50px;
  }
`;

export const UserInfo = styled.div`
  cursor: pointer;
  display: flex;
  gap: 14px;
  align-items: center;
  position: relative;
  transition: color var(--transition-time) var(--cubic);
  &:hover {
    color: var(--color-accent);
  }
`;

export const UserPhoto = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 34px;
  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

export const UserName = styled.span`
  font-size: 12px;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const BurgerButton = styled.div`
  cursor: pointer;
  width: 28px;
  height: 28px;
  :hover {
    color: var(--color-accent);
  }
  > svg {
    transition: color var(--transition-time) var(--cubic);
    color: inherit;
    width: 28px;
    height: 28px;
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    > svg {
      width: 32px;
      height: 32px;
    }
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const ThemeTogglerStyle = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: block;
  }
`;

export const NavStyle = styled.nav`
  display: none;

  @media (min-width: 1440px) {
    display: block;
  }
`;
