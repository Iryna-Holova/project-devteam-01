import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    margin-top: 72px;
    margin-bottom: 200px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 38px;
  background-color: var(--color-accent);
  border-radius: 8px;
  color: var(--color-text);

  & div:nth-child(1) {
    width: 78px;
  }
  & div:nth-child(2) {
    flex: 1 auto;
  }
  & div:nth-child(3) {
    width: 78px;
  }
  & div:nth-child(4) {
    width: 70px;
  }

  @media screen and (min-width: 768px) {
    height: 58px;
    margin-top: 72px;
    & div:nth-child(1) {
      width: 109px;
    }
    & div:nth-child(3) {
      width: 191px;
    }
    & div:nth-child(4) {
      width: 118px;
    }
  }

  @media screen and (min-width: 1440px) {
    height: 60px;
    & div:nth-child(1) {
      width: 149px;
    }
    & div:nth-child(3) {
      width: 279px;
    }
    & div:nth-child(4) {
      width: 158px;
    }
  }
`;

export const Title = styled.div`
  color: var(--color-main);
  font-size: 12px;
  line-height: 18px;
  font-weight: 600;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const IngredientItem = styled.li`
  display: flex;
  min-height: 70px;
  margin-top: 24px;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  padding-bottom: 14px;
  text-align: center;

  & div:nth-child(1) {
    width: 78px;
  }
  & div:nth-child(2) {
    text-align: start;
    flex: 1 auto;
  }
  & div:nth-child(3) {
    width: 148px;
  }

  @media screen and (min-width: 768px) {
    min-height: 97px;
    margin-top: 44px;
    padding-bottom: 43px;

    & div:nth-child(1) {
      width: 109px;
    }
    & div:nth-child(3) {
      width: 309px;
    }
  }

  @media screen and (min-width: 1440px) {
    & div:nth-child(1) {
      width: 149px;
    }
    & div:nth-child(3) {
      width: 437px;
    }
  }
`;

export const IngredientImage = styled.img`
  box-sizing: border-box;
  display: inline-block;
  width: 60px;
  height: 60px;
  padding: 6px;
  border-radius: 8px;
  background: var(--color-accent-secondary);

  @media screen and (min-width: 768px) {
    width: 93px;
    height: 97px;
    padding: 8px 6px;
  }
`;

export const IngredientName = styled.div`
  color: var(--color-text-secondary);
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const MeasureContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
    @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const IngredientDetails = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & div:nth-child(1) {
    width: 78px;
  }
  & div:nth-child(2) {
    width: 70px;
  }

  @media screen and (min-width: 768px) {
    & div:nth-child(1) {
      width: 191px;
    }
    & div:nth-child(2) {
      width: 118px;
    }
  }

    @media screen and (min-width: 1440px) {
    & div:nth-child(1) {
      width: 279px;
    }
    & div:nth-child(2) {
      width: 158px;
    }
  }
`;

export const QuantityIndicator = styled.span`
  display: inline-block;
  min-width: 29px;
  padding: 4px;
  background-color: var(--color-accent);
  color: var(--color-secondary);
  font-size: 10px;
  line-height: 15px;
  font-weight: 600;
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    min-width: 60px;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const RemoveButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 4px;
  border: none;
  color: #333333;
  background-color: transparent;
  border: none;

  > svg {
    width: 14px;
    height: 14px;

    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }
`;
