import React, { useState } from 'react';
import Logo from '../Logo/LogoHeader';
import Navigation from './Navigation/Navigation';
import UserLogo from './UserLogo/UserLogo';
import ThemeToggler from './ThemeToggler/ThemeToggler';
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
  NavStyle,
  ThemeTogglerStyle,
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

  const handleNavLinkClick = () => {
    setBurgerMenuOpen(false); // Закрываем бургер-меню при нажатии на пункт навигации
  };

  return (
    <HeaderContainer className="container">
      <LogoStyled>
        <LogoHeader href="https://iryna-holova.github.io/project-devteam-01/">
          <Logo>So Yummy</Logo>
        </LogoHeader>
      </LogoStyled>
      <NavStyle>
        <Navigation handleNavLinkClick={handleNavLinkClick} />
      </NavStyle>
      <HeaderContainerStyle>
        <UserInfo>
          <UserPhoto src="path_to_user_photo" alt="User Photo" />
          <UserName onClick={handleProfileClick}>Тестовое имя</UserName>

          {isProfileOpen && <UserLogo />}
        </UserInfo>
        <ThemeTogglerStyle>
          <ThemeToggler />
        </ThemeTogglerStyle>
        <BurgerMenu onClick={handleBurgerMenuClick}>
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
        <Navigation handleNavLinkClick={handleNavLinkClick} />
        <ThemeToggler />
      </BurgerMenuContent>
    </HeaderContainer>
  );
};

export default Header;
