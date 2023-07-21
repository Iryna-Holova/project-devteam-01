import React, { useState } from 'react';

import { HiMenuAlt2 } from 'react-icons/hi';

import useAuth from 'hooks/use-auth';

import Logo from 'components/Logo/Logo';
import BurgerMenu from './Burger/Burger';
import Navigation from './Navigation/Navigation';
// import ThemeToggler from './ThemeToggler/ThemeToggler';
import UserLogoutModal from './UserModals/UserLogout';

import {
  HeaderContainer,
  UserInfo,
  UserPhoto,
  UserName,
  HeaderContainerStyle,
  NavStyle,
  ThemeTogglerStyle,
  BurgerButton,
} from './Header.styled';

const Header = () => {
  const [menuOpenState, setMenuOpenState] = useState(false);
  const [profileOpenState, setProfileOpenState] = useState(false);

  const { user } = useAuth();

  const handleBurgerMenuOpen = () => {
    setMenuOpenState(true);
  };

  const handleBurgerMenuClose = () => {
    setMenuOpenState(false);
  };

  const handleProfileClick = () => {
    setProfileOpenState(!profileOpenState);
  };

  return (
    <>
      <HeaderContainer className="container">
        <Logo />
        <NavStyle>
          <Navigation />
        </NavStyle>
        <HeaderContainerStyle>
          <UserInfo onClick={handleProfileClick}>
            <UserPhoto src={user.avatarURL} alt="User Photo" />
            <UserName>{user.name}</UserName>
            {profileOpenState && <UserLogoutModal />}
          </UserInfo>
          <BurgerButton onClick={() => handleBurgerMenuOpen()}>
            <HiMenuAlt2 />
          </BurgerButton>
          <ThemeTogglerStyle>
            {/* <ThemeToggler /> */}
          </ThemeTogglerStyle>
        </HeaderContainerStyle>
      </HeaderContainer>
      <BurgerMenu
        openState={menuOpenState}
        handleBurgerMenuClose={handleBurgerMenuClose}
      />
    </>
  );
};

export default Header;
