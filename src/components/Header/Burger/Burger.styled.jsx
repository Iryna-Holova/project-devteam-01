import styled from 'styled-components';

import spinachMobile1x from '../../../assets/images/burger/burger-spinach-mobile-x1.webp';
import spinachMobile2x from '../../../assets/images/burger/burger-spinach-mobile-x2.webp';
import spinachTablet1x from '../../../assets/images/burger/burger-spinach-tablet-x1.webp';
import spinachTablet2x from '../../../assets/images/burger/burger-spinach-tablet-x2.webp';

export const BurgerBox = styled.div`
  height: 100%;
  background-color: var(--color-accent-secondary);
  background-image: -webkit-image-set(
    url(${spinachMobile1x}) 1x,
    url(${spinachMobile2x}) 2x
  );
  background-repeat: no-repeat;
  background-size: 321px 343px;
  background-position: right bottom;

  @media screen and (min-width: 768px) {
    background-image: -webkit-image-set(
      url(${spinachTablet1x}) 1x,
      url(${spinachTablet2x}) 2x
    );
    background-size: 591px 505px;
  }
`;

export const BurgerContainer = styled.div`
  box-sizing: border-box;
  min-height: 100%;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const BurgerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseButton = styled.div`
  cursor: pointer;
  width: 32px;
  height: 32px;
  color: var(--color-text-main);
  transition: color var(--transition-time) var(--cubic);
  :hover {
    color: var(--color-accent);
  }
  > svg {
    width: 32px;
    height: 32px;
    color: inherit;
  }
`;
