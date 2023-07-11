import React from 'react';
import { NavContainer, NavItem, NavLinkStyled } from './HeaderStyles';

function Navigation() {
  return (
    <NavContainer>
      <NavItem>
        <NavLinkStyled to="/categories/:categoryName">Categories</NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/add">Add Recipe</NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/my">My Recipes</NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/favorite">Favorites</NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/shopping-list">Shopping List</NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/search">Search</NavLinkStyled>
      </NavItem>
    </NavContainer>
  );
}

export default Navigation;
