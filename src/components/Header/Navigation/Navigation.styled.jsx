import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 0;

    .active {
      color: #8baa36;
    }
  }
`;

export const NavItem = styled.li`
  list-style: none;
  margin-bottom: 32px;

  @media (min-width: 1440px) {
    margin-bottom: 0px;
    margin-right: 30px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: #8baa36;
  }
`;
