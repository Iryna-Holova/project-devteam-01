import React, { useState } from 'react';

import { HiMenuAlt2 } from 'react-icons/hi';

import useAuth from 'hooks/use-auth';

import Logo from 'components/Logo/Logo';
import BurgerMenu from './Burger/Burger';
import Navigation from './Navigation/Navigation';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import UserModal from './UserModal/UserModal';
import EditProfile from './EditProfileModal/EditProfileModal';

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
import Modal from 'components/Modal/Modal';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isUserModalOpen, setUserModalOpen] = useState(false);
  const [showProfileModal, setShowEditProfileModal] = useState(false);

  const { user } = useAuth();

  const location = useLocation()
  const isRecipePage = location.pathname.includes('recipe');
  
  const toggleBurgerMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleUserModal = () => {
    setUserModalOpen(!isUserModalOpen);
  };

  const openEditProfileModal = () => {
    setShowEditProfileModal(true);
    document.body.classList.add('modal-show');
  };

  const closeEditProfileModal = () => {
    setShowEditProfileModal(false);
    document.body.classList.remove('modal-show');
  };

  return (
    <>
      <HeaderContainer className="container">
        <Logo />
        <NavStyle>
          <Navigation className={ isRecipePage && 'recipe-page'} />
        </NavStyle>
        <HeaderContainerStyle>
          <UserInfo onClick={toggleUserModal}>
            <UserPhoto src={user.avatarURL} alt="User Photo" />
            <UserName>{user.name}</UserName>
            {isUserModalOpen && (
              <UserModal handleEditProfileOpen={openEditProfileModal} />
            )}
          </UserInfo>
          <BurgerButton onClick={toggleBurgerMenu}>
            <HiMenuAlt2 />
          </BurgerButton>
          <ThemeTogglerStyle>
            <ThemeToggler />
          </ThemeTogglerStyle>
        </HeaderContainerStyle>
      </HeaderContainer>
      <BurgerMenu openState={isMenuOpen} handleCloseMenu={toggleBurgerMenu} />
      <Modal
        openState={showProfileModal}
        onModalClose={closeEditProfileModal}
      >
        <EditProfile
          closeModal={closeEditProfileModal}
          avatar={user.avatarURL}
          name={user.name}
        />
      </Modal>
    </>
  );
};

export default Header;
