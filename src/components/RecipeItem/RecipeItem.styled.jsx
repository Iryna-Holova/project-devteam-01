import styled from 'styled-components';
export const RecipeItemContainer = styled.li`
  width: 100%;
  background-color: #ffffff;

  display: flex;
  padding: 14px 9px;
  max-width: 767.9px;
  border-radius: 8px;
  @media (min-width: 768px) {
    max-width: 1280px;
    padding: 28px 24px;
  }
  @media (min-width: 1440px) {
    max-width: 1980px;
    padding: 40px 40px;
  }
  > img {
    width: 124px;
    height: 124px;
    border-radius: 8px;
    @media (min-width: 768px) {
      width: 228px;
      height: 232px;
    }
    @media (min-width: 1440px) {
      width: 318px;
      height: 324px;
    }
  }
`;
export const RecipeItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-left: 14px;
  @media (min-width: 768px) {
    margin-left: 24px;
  }
  @media (min-width: 1440px) {
    margin-left: 54px;
  }
`;
export const RecipeItemTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    margin-bottom: 18px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 30px;
  }
  > h2 {
    font-weight: 500;
    font-size: 14px;
    line-height: 1;
    line-height: 1;
    letter-spacing: -0.24px;
    color: #22252a;
    @media (min-width: 768px) {
      font-weight: 500;
      font-size: 24px;
    }
  }
  > Button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 4px;
    background-color: #ebf3d4;

    @media (min-width: 768px) {
      width: 38px;
      height: 38px;
    }
    @media (min-width: 1440px) {
      width: 44px;
      height: 44px;
    }
    :hover {
      background-color: #8baa36;
    }

    > svg {
      padding: 5px;
      width: 24px;
      height: 24px;
      stroke: #fafafa;

      fill: transparent;
      @media (min-width: 768px) {
        padding: 8px;
        width: 38px;
        height: 38px;
      }
      @media (min-width: 1440px) {
        padding: 11px;
        width: 44px;
        height: 44px;
      }
      :hover {
        stroke: #22252a;
      }
    }
  }
`;
export const RecipeItemText = styled.div`
  font-weight: 400;
  font-size: 8px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: #3e4462;
  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;
export const RecipeItemBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > p {
    font-weight: 500;
    font-size: 10px;
    line-height: 1.4;
    color: #22252a;
    line-height: 1.4;

    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 1.43;
      line-height: 1.43;
    }
  }
  > button {
    width: 87px;
    height: 27px;
    border-radius: 24px 44px;
    background-color: #22252a;

    font-weight: 400;
    font-size: 10px;
    line-height: 1.5;
    line-height: 1.5;
    color: var(--background-color);
    @media (min-width: 768px) {
      font-size: 14px;
      width: 138px;
      height: 45px;
    }
    @media (min-width: 1440px) {
      font-size: 16px;
      width: 172px;
      height: 59px;
      :hover {
        background-color: #ebf3d4;
      }
    }
    :hover {
      background-color: #ebf3d4;
    }
  }
`;
