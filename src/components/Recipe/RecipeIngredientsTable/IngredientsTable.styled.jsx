import styled from 'styled-components';

export const TableHead = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  background-color: var(--color-accent);
  margin-bottom: 24px;
  border-radius: 8px;

  color: #fafafa;
  font-size: 10px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.3px;
  text-align: center;

  & div:nth-child(1) {
    width: 83px;
  }
  & div:nth-child(2) {
    flex: 1 auto;
  }
  & div:nth-child(3) {
    width: 70px;
  }
  & div:nth-child(4) {
    width: 75px;
  }

  @media screen and (min-width: 768px) {
    height: 60px;
    margin-bottom: 32px;

    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.54px;

    & div:nth-child(1) {
      width: 192px;
    }
    & div:nth-child(3) {
      width: 108px;
    }
    & div:nth-child(4) {
      width: 151px;
    }
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 50px;

    & div:nth-child(1) {
      width: 212px;
      text-align: start;
      padding-left: 40px;
    }
    & div:nth-child(3) {
      width: 230px;
    }
    & div:nth-child(4) {
      width: 175px;
    }
  }
`;

export const TableBody = styled.ul`
  & li {
    display: flex;
    align-items: center;
    min-height: 86px;
    background-color: var(--color-accent-secondary);
    margin-bottom: 16px;
    border-radius: 8px;
    text-align: center;
    &:last-child {
      margin-bottom: 0;
    }

    & div:nth-child(1) {
      width: 83px;
      & img {
        cursor: pointer;
        display: inline;
        width: 57px;
        height: 57px;
        transition: transform var(--transition-time) var(--cubic);

        &:hover {
          transform: scale(1.2);
        }
      }
    }
    & div:nth-child(2) {
      flex: 1 auto;
      text-align: start;
      color: var(--color-text-secondary);
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
      letter-spacing: -0.24px;
    }
    & div:nth-child(3) {
      width: 70px;
      & span {
        vertical-align: center;
        display: inline-block;
        min-width: 37px;
        border-radius: 4px;
        padding: 4px;
        background-color: var(--color-accent);
        color: var(--color-start-text);
        font-size: 10px;
        font-weight: 600;
        line-height: 15px;
      }
    }
    & div:nth-child(4) {
      height: 18px;
      width: 75px;
    }
  }

  @media screen and (min-width: 768px) {
    & li {
      min-height: 178px;
      margin-bottom: 24px;

      & div:nth-child(1) {
        width: 192px;
        & img {
          width: 112px;
          height: 112px;
        }
      }
      & div:nth-child(2) {
        font-size: 24px;
        line-height: 24px;
      }
      & div:nth-child(3) {
        width: 108px;
        & span {
          min-width: 68px;
          min-height: 35px;
          font-size: 18px;
          line-height: 27px;
        }
      }
      & div:nth-child(4) {
        height: 35px;
        width: 151px;
      }
    }
  }

  @media screen and (min-width: 1280px) {
    & li {
      min-height: 182px;

      & div:nth-child(1) {
        width: 252px;
        text-align: start;
        & img {
          margin-left: 58px;
          width: 128px;
          height: 128px;
        }
      }
      & div:nth-child(3) {
        width: 230px;
      }
      & div:nth-child(4) {
        width: 175px;
      }
    }
  }
`;

export const ToggleShoppingList = styled.button`
display: block;
margin: 0 auto;
  padding: 0;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: 2px solid rgba(126, 126, 126, 0.5);
  border-radius: 4px;
  transition: border-color var(--transition-time) var(--cubic);

  &:hover {
    border-color: var(--color-accent);
  }

  & svg {
    color: var(--color-accent);
    width: 14px;
    height: 14px;
  }

  @media screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
    border: 4px solid rgba(126, 126, 126, 0.5);
    & svg {
      width: 27px;
      height: 27px;
    }
  }
`;
