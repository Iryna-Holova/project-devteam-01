import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { CgClose } from 'react-icons/cg';

import Logo from 'components/Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

import {
  BurgerBox,
  BurgerContainer,
  BurgerHeader,
  CloseButton,
} from './Burger.styled';

const BurgerMenu = ({ openState, handleBurgerMenuClose }) => {
  return (
    <Menu
      right
      htmlClassName={'burger-open'}
      width={'100%'}
      itemListElement="div"
      customBurgerIcon={false}
      isOpen={openState}
    >
      <BurgerBox>
        <BurgerContainer>
          <BurgerHeader>
            <Logo func={handleBurgerMenuClose}/>
            <CloseButton onClick={() => handleBurgerMenuClose()}>
              <CgClose />
            </CloseButton>
          </BurgerHeader>
          <Navigation handleNavLinkClick={handleBurgerMenuClose} />
          <ThemeToggler />
        </BurgerContainer>
      </BurgerBox>
    </Menu>
  );
};

export default BurgerMenu;
