import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/search">Ingredients</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add Recipe</NavLink>
        </li>
        <li>
          <NavLink to="/my">My Recipes</NavLink>
        </li>
        <li>
          <NavLink to="/favorite">Favorite</NavLink>
        </li>
        <li>
          <NavLink to="/shopping-list">Shopping List</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
