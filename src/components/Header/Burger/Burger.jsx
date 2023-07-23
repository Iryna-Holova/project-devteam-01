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

const BurgerMenu = ({ openState, handleCloseMenu }) => {
  return (
    <Menu
      right
      bodyClassName={'modal-show'}
      width={'100%'}
      itemListElement="div"
      customBurgerIcon={false}
      isOpen={openState}
    >
      <BurgerBox>
        <BurgerContainer>
          <BurgerHeader>
            <Logo handleCloseMenu={handleCloseMenu} />
            <CloseButton onClick={handleCloseMenu}>
              <CgClose />
            </CloseButton>
          </BurgerHeader>
          <Navigation handleCloseMenu={handleCloseMenu} />
          <ThemeToggler />
        </BurgerContainer>
      </BurgerBox>
    </Menu>
  );
};

export default BurgerMenu;
