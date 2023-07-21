import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../../redux/auth/operations';
import {
  UserLogoModalContainer,
  // EditProfileButton,
  LogoutButton,
} from './UserLogout.styled';

import { FiArrowRight } from 'react-icons/fi';
// import { HiOutlinePencil } from 'react-icons/hi';

const UserLogoutModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleEditProfile = () => {
  //   // Обработчик клика по кнопке "Edit Profile"
  // };

  const handleLogout = () => {
    dispatch(logOut()); // Вызов экшена logOut при клике на кнопку "Logout"
    navigate('/start'); // Навигация на страницу регистрации
  };

  return (
    <UserLogoModalContainer>
      {/* <EditProfileButton onClick={handleEditProfile}>
        Edit Profile
        <HiOutlinePencil />
      </EditProfileButton> */}
      <LogoutButton onClick={handleLogout}>
        Log out
        <FiArrowRight />
      </LogoutButton>
    </UserLogoModalContainer>
  );
};

export default UserLogoutModal;
