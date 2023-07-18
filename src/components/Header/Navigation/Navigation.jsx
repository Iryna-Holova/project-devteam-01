import React from 'react';

import { FiSearch } from 'react-icons/fi';

import { NavContainer, NavItem, NavLinkStyled } from './Navigation.styled';

function Navigation({ handleNavLinkClick }) {
  return (
    <nav>
      <NavContainer>
        <NavItem>
          <NavLinkStyled to="/categories/beef" onClick={handleNavLinkClick}>
            Categories
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/add" onClick={handleNavLinkClick}>
            Add Recipe
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/my" onClick={handleNavLinkClick}>
            My Recipes
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/favorite" onClick={handleNavLinkClick}>
            Favorites
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/shopping-list" onClick={handleNavLinkClick}>
            Shopping List
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/search" onClick={handleNavLinkClick}>
            <FiSearch />
            <span>Search</span>
          </NavLinkStyled>
        </NavItem>
      </NavContainer>
    </nav>
  );
}

export default Navigation;
