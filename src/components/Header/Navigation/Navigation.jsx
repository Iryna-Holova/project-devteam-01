import React from 'react';

import { FiSearch } from 'react-icons/fi';

import { NavContainer, NavItem, NavLinkStyled } from './Navigation.styled';

function Navigation({ handleCloseMenu }) {
  return (
    <nav>
      <NavContainer>
        <NavItem>
          <NavLinkStyled to="/categories/beef" onClick={handleCloseMenu}>
            Categories
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/add" onClick={handleCloseMenu}>
            Add Recipe
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/my" onClick={handleCloseMenu}>
            My Recipes
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/favorite" onClick={handleCloseMenu}>
            Favorites
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/shopping-list" onClick={handleCloseMenu}>
            Shopping List
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/search" onClick={handleCloseMenu}>
            <FiSearch />
            <span>Search</span>
          </NavLinkStyled>
        </NavItem>
      </NavContainer>
    </nav>
  );
}

export default Navigation;
