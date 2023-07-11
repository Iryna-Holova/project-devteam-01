import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import UserLogo from './UserLogo';
import ThemeToggler from './ThemeToggler';
import { HeaderContainer } from './HeaderStyles';

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Navigation />
      <UserLogo />
      <ThemeToggler />
    </HeaderContainer>
  );
}

export default Header;
