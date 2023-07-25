import styled from 'styled-components';

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.page {
    height: 100%;
    background-color: #ebf3d4;
    & svg {
      fill: rgb(139, 170, 54, 0.5);
    }
  }
  &.shared {
    width: 100vw;
    height: 100vh;
  }
`;
