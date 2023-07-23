import styled from 'styled-components';

export const ModalOverlay = styled.div`
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  padding: 30px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);

  &.corner {
    align-items: end;
    justify-content: end;
  }

  &.my-node-enter {
    background-color: transparent;
    backdrop-filter: blur(0);
    & div {
      scale: 0;
    }
  }
  &.my-node-enter-active {
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(3px);
    transition: background-color var(--transition-time) var(--cubic),
      backdrop-filter var(--transition-time) var(--cubic);
    & div {
      scale: 1;
      transition: scale var(--transition-time) var(--cubic);
    }
  }
  &.my-node-exit {
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(3px);
    & div {
      scale: 1;
    }
  }
  &.my-node-exit-active {
    background-color: transparent;
    backdrop-filter: blur(0);
    transition: background-color var(--transition-time) var(--cubic),
      backdrop-filter var(--transition-time) var(--cubic);
    & div {
      scale: 0;
      transition: scale var(--transition-time) var(--cubic);
    }
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;
  padding: 32px 0;
  border-radius: 30px;
  position: relative;
  background-color: var(--color-main);
  color: var(--color-text-primary);

  @media screen and (min-width: 768px) {
    padding: 50px 0;
  }
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  width: 40px;
  height: 40px;
  padding: 10px;
  color: var(--color-icons);
  transition: color var(--transition-time) var(--cubic);

  &:hover {
    color: var(--color-accent);
  }
  > svg {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 768px) {
    top: 12px;
    right: 12px;
    width: 48px;
    height: 48px;
    padding: 12px;

    > svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const ModalTitle = styled.h2``;

export const ModalContent = styled.div`
  padding: 0 24px;
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: 4px;

  &::-webkit-scrollbar {
    width: 4px;
    /* background: transparent; */
  }

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
`;
