import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    /* margin: 40px 0; */
    /* flex-direction: column; */
  }

  @media (max-width: 480px) {
    margin-bottom: 8px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  list-style: none;

  @media (max-width: 768px) {
    margin-top: 50px;
    margin-right: 94px;
  }

  @media (max-width: 620px) {
    margin-top: 50px;
    margin-right: 40px;
  }

  @media (max-width: 563px) {
    margin-top: 50px;
    margin-right: 10px;
  }

  @media (max-width: 482px) {
margin: 0;
  }
`;

export const NavItem = styled.li`
  margin-right: 1rem;
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 18px;
  
  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 620px) {
    margin-bottom: 14px;
    margin-right: 0;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #fafafa;
  font-weight: 500;
  font-size: 14px;
  /* line-height: 24px; */

  &:hover {
    color: #8baa36;
    opacity: 1;
  }
`;
