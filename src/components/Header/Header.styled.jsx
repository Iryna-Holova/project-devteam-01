import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  background-color: #f8f8f8;
`;

export const BurgerMenu = styled.div`
  display: none;

  @media (max-width: 1399px) {
    display: block;
    position: relative;
    z-index: 999;
    cursor: pointer;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const UserPhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserName = styled.span`
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export const BurgerIcon = styled.div`
  width: 30px;
  height: 2px;
  background-color: #333;
  margin-bottom: 6px;
`;

export const BurgerMenuContent = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  background-color: #f8f8f8;
  padding: 20px;
  display: ${({ 'data-is-menu-open': isMenuOpen }) =>
    isMenuOpen ? 'block' : 'none'};
`;



export const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const LogoHeader = styled.a`
  width: 40px;
  height: 40px;
`;


export const LogoutButton = styled.button`
  // Стили кнопки "Logout"
`;

export const NavContainer = styled.nav`
  // Стили контейнера навигации
`;

export const NavItem = styled.li`
  // Стили пункта навигации
`;

export const NavLinkStyled = styled(NavLink)`
  // Стили ссылки в навигации
`;

export const ThemeTogglerContainer = styled.div`
  // Стили контейнера переключателя темы
`;

export const ThemeTogglerButton = styled.button`
  // Стили кнопки переключателя темы
`;

export const UserLogoContainer = styled.div`
  // Стили контейнера логотипа пользователя
`;

export const UserLogoContent = styled.div`
  // Стили содержимого логотипа пользователя
`;

export const UserLogoModalContainer = styled.div`
  // Стили контейнера модального окна логотипа пользователя
`;

export const EditProfileButton = styled.button`
  // Стили кнопки "Edit Profile"
`;

export const LogoContainer = styled.div`
  // стили для LogoContainer
`;

export const LogoImage = styled.img`
  // стили для LogoImage
`;

