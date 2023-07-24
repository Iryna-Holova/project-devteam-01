import styled from 'styled-components';

const Title = styled.div`
  position: relative;
  margin-top: 114px;
  color: var(--color-text-primary);

  & h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: 28px;
    letter-spacing: -0.56px;
    &.transparent {
      color: transparent;
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 136px;
    & h2 {
      font-size: 32px;
      line-height: 32px;
      letter-spacing: -0.64px;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-top: 164px;
    & h2 {
      font-size: 44px;
      line-height: 44px;
      letter-spacing: -0.88px;
    }
  }

  & svg {
    position: absolute;

    &.circle {
      left: 231px;
      width: 6px;
      height: 6px;
      color: var(--color-text-main);
      @media screen and (min-width: 768px) {
        display: none;
      }
    }

    &.square {
      rotate: -25deg;
      width: 8px;
      height: 8px;
      border-radius: 3px;
      color: var(--color-accent);
      @media screen and (min-width: 768px) {
        width: 12px;
        height: 12px;
      }
    }

    &.square.left {
      left: 104px;
      bottom: 50px;
      @media screen and (min-width: 768px) {
        left: 187px;
        bottom: 64px;
      }
      @media screen and (min-width: 1440px) {
        left: 228px;
        bottom: 72px;
      }
    }

    &.square.right {
      right: 0;
      bottom: 23px;
      @media screen and (min-width: 768px) {
        right: -9px;
        bottom: 51px;
      }
      @media screen and (min-width: 1440px) {
        right: 71px;
        bottom: 59px;
      }
    }

    &.square.center {
      display: none;
      color: var(--color-text-main);
      @media screen and (min-width: 768px) {
        display: block;
        left: 405px;
        bottom: -3px;
      }
      @media screen and (min-width: 1440px) {
        left: 707px;
        bottom: -8px;
      }
    }
  }
`;

export default Title;
