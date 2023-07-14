import styled from 'styled-components';

export const TabsList = styled.ul`
  display: flex;
  margin-bottom: 32px;
  margin-top: 60px;
  padding: 0 29px;
  gap: 28px;
  border-bottom: 1px solid;
  border-color: #e0e0e0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 768px) {
    gap: 55px;
    margin-bottom: 50px;
    padding: 0 30px;
    border-width: 1px;
    transform: matrix(1, 0, 0, 1, 0, 0);
  }

  @media screen and (min-width: 1440px) {
    margin-top: 110px;
  }
`;

export const Tab = styled.a`
  text-decoration: none;
  position: relative;
  display: block;
  padding: 10px 0 32px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
  color: #bdbdbd;
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

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
    color: #8baa36;
    &::after {
      background-color: #8baa36;
    }
  }
  &:hover {
    color: #8baa36;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 28px;
  }
`;
