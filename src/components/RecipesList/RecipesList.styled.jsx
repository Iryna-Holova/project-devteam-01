import styled from 'styled-components';

export const RecipesListContainer = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media (min-width: 768px) {
    margin-top: 100px;
    gap: 40px;
  }
  @media (min-width: 1440px) {
    gap: 50px;
  }
`;

export const RecipeItemContainer = styled.li`
  background-color: var(--color-secondary);
  display: flex;
  padding: 14px 9px;
  border-radius: 8px;
  gap: 14px;

  @media (min-width: 768px) {
    padding: 28px 24px;
    gap: 24px;
  }
  @media (min-width: 1440px) {
    padding: 40px 40px;
    gap: 54px;
  }

  > img {
    object-fit: cover;
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

export const ImagePlaceholder = styled.div`
  position: relative;
  border-radius: 8px;
  background-color: var(--color-placeholder);
  min-width: 124px;
  min-height: 124px;

  @media (min-width: 768px) {
    min-width: 228px;
    min-height: 232px;
  }

  @media (min-width: 1440px) {
    min-width: 318px;
    min-height: 324px;
  }

  > img {
    position: absolute;
    border-radius: 8px;
    object-fit: cover;

    @media (min-width: 768px) {
      width: 228px;
      height: 232px;
    }

    @media (min-width: 1440px) {
      width: 318px;
      height: 324px;
    }
  }

  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--color-icons-light);
  }
`;

export const RecipeItemBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  > h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.24px;
    color: var(--color-text-secondary);
    @media (min-width: 768px) {
      font-size: 24px;
    }
  }
  > button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 4px;
    background-color: var(--color-accent-secondary);

    &.own-recipes {
      background-color: var(--color-accent);
      >svg {
        color: var(--color-secondary);
      }
    }

    @media (min-width: 768px) {
      width: 38px;
      height: 38px;
    }
    @media (min-width: 1440px) {
      width: 44px;
      height: 44px;
    }
    &:hover {
      > svg {
        color: var(--color-warning);
      }
    }

    > svg {
      width: 14px;
      height: 14px;
      color: var(--color-icons);
      transition: color var(--transition-time) var(--cubic);
      fill: transparent;
      @media (min-width: 768px) {
        width: 22px;
        height: 22px;
      }
      @media (min-width: 1440px) {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
export const RecipeItemText = styled.div`
  font-size: 8px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: var(--color-text);
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
  align-items: end;
  justify-content: space-between;
  > p {
    font-weight: 500;
    font-size: 10px;
    line-height: 1.4;
    color: var(--color-text-secondary);
    line-height: 1.4;

    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 1.43;
    }
  }
  > button {
    cursor: pointer;
    border: none;
    padding: 6px 14px;
    border-radius: 24px 44px;
    color: var(--color-start-text);
    background-color: var(--color-footer);
    font-weight: 400;
    font-size: 10px;
    line-height: 1.5;
    transition: background-color var(--transition-time) var(--cubic);

    &.own-recipes {
      background-color: var(--color-accent);
      &:hover {
        background-color: var(--color-footer);
      }
    }

    @media (min-width: 768px) {
      font-size: 14px;
      padding: 12px 32px;
    }
    @media (min-width: 1440px) {
      font-size: 16px;
      padding: 14px 38px;
    }
    &:hover {
      background-color: var(--color-accent);
    }
  }
`;
