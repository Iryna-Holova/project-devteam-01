import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo/LogoHeader';
import Navigation from './Navigation';
import UserLogo from './UserLogo';
import ThemeToggler from './ThemeToggler';
import {
  HeaderContainer,
  LogoStyled,
  LogoHeader,
  LogoutButton,
  BurgerMenu,
  UserInfo,
  UserPhoto,
  UserName,
  BurgerIcon,
  BurgerMenuContent,
} from './Header.styled';

const Header = () => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleBurgerMenuClick = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const handleProfileClick = () => {
    setProfileOpen(!isProfileOpen);
  };

  const handleLogoutClick = () => {
    // Здесь выполняется выход из аккаунта
    // Например, сбросить токен аутентификации, очистить локальное хранилище и т.д.
    navigate('/login'); // Навигация на страницу регистрации
  };

  return (
    <HeaderContainer className="container">
      <LogoStyled>
        <LogoHeader href="/">
          <Logo>So Yummy</Logo>
        </LogoHeader>
      </LogoStyled>
      <UserInfo>
        <UserPhoto src="path_to_user_photo" alt="User Photo" />
        <UserName onClick={handleProfileClick}>Тестовое имя</UserName>
        {isProfileOpen && <UserLogo />}
      </UserInfo>
      <BurgerMenu onClick={handleBurgerMenuClick}>
        <BurgerIcon />
        <BurgerIcon />
        <BurgerIcon />
      </BurgerMenu>
      <BurgerMenuContent data-is-menu-open={isBurgerMenuOpen}>
        <Navigation />
        <ThemeToggler />
        <LogoutButton onClick={handleLogoutClick}>Logout</LogoutButton>
      </BurgerMenuContent>
    </HeaderContainer>
  );
};

export default Header;
