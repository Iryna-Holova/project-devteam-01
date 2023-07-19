import styled from 'styled-components';

export const LogoContainer = styled.div`
  cursor: pointer;
`;

export const LogoImage = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  padding: 6px;
  border-radius: 12px;
  background-color: var(--color-accent);

  > svg {
    width: 28px;
    height: 28px;
    stroke: var(--color-start-text);
  }

  &.start {
    width: 54px;
    height: 54px;
    padding: 5px;
    margin-bottom: 28px;

    > svg {
      width: 44px;
      height: 44px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    padding: 7px;

    > svg {
      width: 30px;
      height: 30px;
    }
      &.start {
    width: 68px;
    height: 68px;
    padding: 12px;
    margin-bottom: 44px;
  }
  }
`;
