import styled from 'styled-components';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

export const Container = styled.ul`
  position: relative;
  z-index: 2;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px 60px;
  background: var(--color-main);
  box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);
  border-radius: 26px;
  margin-top:50px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (min-width: 768px) {
    padding: 14px 72px;
  }
`;

export const Page = styled.li`
  font-family: PoppinsSemiBold;
  font-size: 12px;
  line-height: calc(18 / 12);
  color: ${props => props.active === 'true' ? 'var(--color-main)' : 'var(--color-footer)'};

  display: flex;
  justify-content: center;
  align-items: center;
  width: 27px;
  height: 27px;
  background-color: ${props => props.active === 'true' ? 'var(--color-accent)' : 'var(--color-accent-secondary)'};
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;


export const StyledChevronLeft = styled(BiChevronLeft)`
  position: absolute;
  top: 50%;
  left: 17px;
  transform: translate(0, -50%);
  margin-right: 13px;
  cursor: pointer;
  fill:var(--color-start-bg);
`;

export const StyledChevronRight = styled(BiChevronRight)`
  position: absolute;
  top: 50%;
  right: 17px;
  transform: translate(0, -50%);
  margin-left: -5px;
  cursor: pointer;
  fill:var(--color-start-bg);
`;