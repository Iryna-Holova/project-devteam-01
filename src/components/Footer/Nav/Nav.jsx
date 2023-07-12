import React from 'react';
import { NavItem, NavList, NavLinkStyled } from './Nav.styled';

function Nav() {
  return (
    <NavList>
      <NavItem>
        <NavLinkStyled to="/search">Ingredients</NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/add">Add Recipe</NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/my">My Recipes</NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/favorite">Favorite</NavLinkStyled>
      </NavItem>
      <NavItem>
        <NavLinkStyled to="/shopping-list">Shopping List</NavLinkStyled>
      </NavItem>
    </NavList>
  );
}

export default Nav;
