import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`


  @media (max-width: 768px) {
    /* margin: 40px 0; */
    /* flex-direction: column; */
  }

  @media (max-width: 480px) {
    /* margin-bottom: 8px; */
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 18px;
  list-style: none;


  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const NavItem = styled.li`
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #fafafa;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;

  &:hover {
    color: #8baa36;
  }
`;
