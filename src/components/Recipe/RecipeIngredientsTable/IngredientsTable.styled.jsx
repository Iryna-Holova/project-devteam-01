import styled from 'styled-components';

export const Table = styled.div``;

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
    & div:nth-child(2) {
      flex: 1 auto;
    }

    & div:nth-child(3) {
      width: 108px;
    }
    & div:nth-child(4) {
      width: 151px;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;

    & div:nth-child(1) {
      width: 212px;
      text-align: start;
      padding-left: 40px;
    }
    & div:nth-child(2) {
      flex: 1 auto;
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
  margin-bottom: 50px;

  & li {
    display: flex;
    align-items: center;
    min-height: 86px;
    background-color: var(--color-accent-secondary);
    margin-bottom: 16px;
    border-radius: 8px;
    text-align: center;
    & div:nth-child(1) {
      width: 83px;
      & img {
        display: inline;
        width: 57px;
        height: 57px;
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
      text-align: end;
      & span {
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
      width: 75px;
    }
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 96px;
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
        text-align: center;
        & span {
          box-sizing: border-box;
          display: inline-block;
          min-width: 68px;
          min-height: 35px;
          vertical-align: middle;
          font-size: 18px;
          line-height: 27px;
        }
      }
      & div:nth-child(4) {
        width: 151px;
      }
    }
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 100px;
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
