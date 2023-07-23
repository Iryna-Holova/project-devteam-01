import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../../../redux/auth/operations';

import {
  UserModalContainer,
  EditProfileButton,
  LogoutButton,
} from './UserModal.styled';

import { FiArrowRight } from 'react-icons/fi';
import { HiOutlinePencil } from 'react-icons/hi';

const UserLogoutModal = ({handleEditProfileOpen}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/start');
  };

  return (
    <UserModalContainer>
      <EditProfileButton onClick={handleEditProfileOpen}>
        Edit profile
        <HiOutlinePencil />
      </EditProfileButton>
      <LogoutButton onClick={handleLogout}>
        Log out
        <FiArrowRight />
      </LogoutButton>
    </UserModalContainer>
  );
};

export default UserLogoutModal;
