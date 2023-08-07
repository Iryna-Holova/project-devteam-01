import styled from 'styled-components';

export const TabsList = styled.ul`
  overflow-x: scroll;
  border-bottom: 1px solid var(--color-tabs); 
    &::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  height: 58px;
  gap: 28px;
  padding-left: 28px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    gap: 55px;
    padding-left: 30px;
  }
`;

export const Tab = styled.a`
  position: relative;
  padding-top: 10px;
  padding-bottom: 32px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  color: var(--color-tabs);
  transition: color var(--transition-time) var(--cubic);

  &::after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: transparent;
  }
  &.active {
    &::after {
      background-color: var(--color-accent);
    }
  }
  &:hover,
  &:focus,
  &.active {
    color: var(--color-accent);
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding-bottom: 28px;
  }
`;
