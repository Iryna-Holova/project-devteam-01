import React from 'react';
import { NavContainer, NavItem, NavLinkStyled } from './Navigation.styled';

function Navigation({ handleNavLinkClick }) {
  return (
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
          Search
        </NavLinkStyled>
      </NavItem>
    </NavContainer>
  );
}

export default Navigation;
