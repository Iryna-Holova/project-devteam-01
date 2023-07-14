import React from 'react';
import { useDispatch } from 'react-redux';
import {
  UserLogoModalContainer,
  EditProfileButton,
  LogoutButton,
} from './Header.styled';
import { logOut } from '../../redux/auth/operations';
import { useNavigate } from 'react-router-dom';

function UserLogoModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditProfile = () => {
    // Обработчик клика по кнопке "Edit Profile"
  };

  const handleLogout = () => {
    dispatch(logOut()); // Вызов экшена logOut при клике на кнопку "Logout"
    navigate('/register'); // Навигация на страницу регистрации
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
