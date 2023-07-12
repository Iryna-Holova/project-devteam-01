import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';
import UserLogo from './UserLogo';
import ThemeToggler from './ThemeToggler';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #f8f8f8;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const SearchIcon = styled.svg`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  cursor: pointer;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const UserName = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
  cursor: pointer;
`;

const Header = () => {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const handleUserMenuClick = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <HeaderContainer>
      <NavContainer>
        <Link to="/">
          <Logo />
        </Link>
        <Navigation />
        <SearchIcon
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </SearchIcon>
      </NavContainer>
      <UserInfo>
        <UserName onClick={handleUserMenuClick}>John Doe</UserName>
        {isUserMenuOpen && <UserLogo />}
        <ThemeToggler />
      </UserInfo>
    </HeaderContainer>
  );
};

export default Header;
