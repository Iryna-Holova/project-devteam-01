import React from 'react';
import { LogoContainer, LogoImage } from '../Header/Header.styled';
import logoImage from '../../assets/svg/Logo/logo.svg';

function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logoImage} alt="So Yummy" />
    </LogoContainer>
  );
}

export default Logo;
