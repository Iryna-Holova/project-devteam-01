import React from 'react';
import {
  UserLogoModalContainer,
  EditProfileButton,
  LogoutButton,
} from './HeaderStyles';

function UserLogoModal() {
  const handleEditProfile = () => {
    // Обработчик клика по кнопке "Edit Profile"
  };

  const handleLogout = () => {
    // Обработчик клика по кнопке "Logout"
  };

  return (
    <UserLogoModalContainer>
      <EditProfileButton onClick={handleEditProfile}>
        Edit Profile
      </EditProfileButton>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </UserLogoModalContainer>
  );
}

export default UserLogoModal;
