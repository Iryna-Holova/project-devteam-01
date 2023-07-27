import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;

  & span {
    color: #fafafa;
    font-size: 18px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.27px;
  }

  @media screen and (min-width: 768px) {
    gap: 12px;
    & span {
      font-size: 28px;
      line-height: 28px;
      letter-spacing: 0.42px;
    }
  }
`;

export const LogoImage = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  padding: 9px;
  border-radius: 12px;
  background-color: var(--color-accent);

  > svg {
    width: 22px;
    height: 22px;
    stroke: var(--color-start-text);
  }

  &.start {
    width: 54px;
    height: 54px;
    padding: 12px;
    margin-bottom: 28px;

    > svg {
      width: 30px;
      height: 30px;
    }
  }

  &.footer {
    border-radius: 6px;
    background-color: #EBF3D4;
    padding: 6px;
    width: 32px;
    height: 32px;
    > svg {
      width: 20px;
      height: 20px;
      stroke: #8BAA36;
    }
  }

  @media screen and (min-width: 768px) {
    width: 44px;
    height: 44px;
    padding: 9px;

    > svg {
      width: 26px;
      height: 26px;
    }
    &.start {
      width: 68px;
      height: 68px;
      padding: 17px;
      margin-bottom: 44px;
      > svg {
        width: 34px;
        height: 34px;
      }
    }

    &.footer {
      padding: 10px;
      width: 44px;
      height: 44px;
      border-radius: 12px;
      > svg {
        width: 24px;
        height: 24px;
        stroke: var(--color-accent);
      }
    }
  }
`;
