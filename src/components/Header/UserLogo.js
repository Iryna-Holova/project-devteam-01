import React from 'react';
import UserLogoModal from './UserLogoModal';
import { UserLogoContainer, UserLogoContent } from './HeaderStyles';

function UserLogo() {
  const handleUserLogoClick = () => {
    // Обработчик клика по логотипу пользователя
  };

  return (
    <UserLogoContainer onClick={handleUserLogoClick}>
      <UserLogoContent>
        {/* Разметка фото пользователя или иконки */}
        {/* Имя пользователя */}
      </UserLogoContent>
      <UserLogoModal />
    </UserLogoContainer>
  );
}

export default UserLogo;
