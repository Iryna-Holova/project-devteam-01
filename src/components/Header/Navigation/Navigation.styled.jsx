import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 0;

    .active {
      color: var(--color-accent);
    }
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 30px;
  }
`;

export const NavItem = styled.li`
  list-style: none;
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  line-height: 50px;
  font-weight: 500;
  letter-spacing: -0.36px;
  color: var(--color-text);
  text-decoration: none;
  text-align: center;

  &:hover,
  &.active {
    font-weight: 600;
    color: var(--color-accent);
  }

  & svg {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 64px;
    font-weight: 500;
    letter-spacing: -0.48px;

    & svg {
      width: 24px;
      height: 24px;
    }
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: 44px;
    & span {
      display: none;
    }
  }
`;
