import React from 'react';
// import { NavLink } from 'react-router-dom';
import { NavContainer, NavList, NavItem, NavLinkStyled } from './NavStyles';

function Nav() {
  return (
    <NavContainer>
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
    </NavContainer>
  );
}

export default Nav;
