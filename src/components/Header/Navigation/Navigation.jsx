import React from 'react';

import { FiSearch } from 'react-icons/fi';

import { NavContainer, NavItem, NavLinkStyled } from './Navigation.styled';

function Navigation({ handleCloseMenu, className }) {
  return (
    <nav>
      <NavContainer>
        <NavItem>
          <NavLinkStyled to="/categories/beef" onClick={handleCloseMenu} className={className}>
            Categories
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/add" onClick={handleCloseMenu} className={className}>
            Add Recipe
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/my" onClick={handleCloseMenu} className={className}>
            My Recipes
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/favorite" onClick={handleCloseMenu} className={className}>
            Favorites
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/shopping-list" onClick={handleCloseMenu} className={className}>
            Shopping List
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/search" onClick={handleCloseMenu} className={className}>
            <FiSearch />
            <span>Search</span>
          </NavLinkStyled>
        </NavItem>
      </NavContainer>
    </nav>
  );
}

export default Navigation;
