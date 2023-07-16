import React, { useState } from 'react';
import Logo from '../Logo/LogoHeader';
import Navigation from './Navigation';
import UserLogo from './UserLogo';
import ThemeToggler from './ThemeToggler';
import {
  HeaderContainer,
  LogoStyled,
  LogoHeader,
  BurgerMenu,
  UserInfo,
  UserPhoto,
  UserName,
  BurgerIcon,
  BurgerMenuContent,
  BurgerMenuCloseButton,
  HeaderContainerStyle,
  NavContainer, NavStyle,
} from './Header.styled';

const Header = () => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  const handleBurgerMenuClick = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const handleProfileClick = () => {
    setProfileOpen(!isProfileOpen);
  };

  return (
    <HeaderContainer className="container">
      <LogoStyled>
        <LogoHeader href="/">
          <Logo>So Yummy</Logo>
        </LogoHeader>
      </LogoStyled>
      <NavStyle>
        <Navigation />
      </NavStyle>
      <HeaderContainerStyle>
        <UserInfo>
          <UserPhoto src="path_to_user_photo" alt="User Photo" />
          <UserName onClick={handleProfileClick}>Тестовое имя</UserName>
          {isProfileOpen && <UserLogo />}
        </UserInfo>
        <BurgerMenu onClick={handleBurgerMenuClick}>
          {/* Условный рендеринг значков бургер меню и закрытия */}
          {isBurgerMenuOpen ? (
            <BurgerMenuCloseButton
              data-is-menu-open={isBurgerMenuOpen}
              onClick={handleBurgerMenuClick}
            />
          ) : (
            <>
              <BurgerIcon />
              <BurgerIcon />
              <BurgerIcon />
            </>
          )}
        </BurgerMenu>
      </HeaderContainerStyle>
      <BurgerMenuContent data-is-menu-open={isBurgerMenuOpen}>
        <NavContainer>
          <Navigation />
        </NavContainer>
        <ThemeToggler />
      </BurgerMenuContent>
    </HeaderContainer>
  );
};

export default Header;
