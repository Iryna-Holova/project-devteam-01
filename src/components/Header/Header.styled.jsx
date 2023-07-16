import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  /* width: 100%; */
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  /* position: fixed; */
  /* top: 0;
  left: 0;
  z-index: 1000; */
  margin-bottom: 40px;
`;

export const HeaderContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BurgerMenu = styled.div`
  display: none;

  @media (min-width: 320px) {
    display: block;
    position: relative;
    z-index: 999;
    cursor: pointer;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const BurgerMenuCloseButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-top: -6px; /* Добавим отрицательный margin, чтобы выровнять кнопку закрытия по вертикали */
  margin-left: 16px; /* Добавим margin слева, чтобы создать расстояние между иконкой бургер меню и кнопкой закрытия */

  &:before,
  &:after {
    content: '';
    position: fixed;
    width: 24px;
    height: 2px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 50px;
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

  /* Скрыть иконку при открытом меню */
  display: ${({ 'data-is-menu-open': isMenuOpen }) =>
    isMenuOpen ? 'none' : 'block'};
`;

export const BurgerMenuContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  display: ${({ 'data-is-menu-open': isMenuOpen }) =>
    isMenuOpen ? 'flex' : 'none'};
  justify-content: center; /* Центрируем по горизонтали */
  align-items: center;
  flex-direction: column; /* Центрируем по вертикали */
  z-index: 998;
  /* Дополнительные стили, если необходимо */

  @media (min-width: 1440px) {
    display: none;
  }
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

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 30px;
  height: 30px;
  background-color: #333;
  cursor: pointer;
`;

export const LogoutButton = styled.button`
  background-color: #8baa36;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #648c26;
  }

  svg {
    margin-right: 8px;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const NavStyle = styled.nav`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const NavItem = styled.li`
  list-style: none;
  margin-bottom: 32px;

  @media (min-width: 1440px) {
    margin-bottom: 0px;
    margin-right: 30px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-decoration: none;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  /* Подсветка при наведении на ссылку */
  &:hover {
    color: #8baa36;
  }
`;

export const ThemeTogglerContainer = styled.div`
  margin-top: 30px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const LogoImage = styled.img`
  // стили для LogoImage
`;
