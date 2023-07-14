import React from 'react';
import Logo from '../Logo/LogoHeader';
import Navigation from './Navigation';
import UserLogo from './UserLogo';
import ThemeToggler from './ThemeToggler';
import { HeaderContainer } from './Header.styled';

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
