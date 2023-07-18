import styled, { css } from 'styled-components';

const WrapperStyles = css`
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 343px) {
    width: 343px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 1240px;
  }
`;

export const Container = styled.div`
    ${WrapperStyles}
`;

export const AddRecipeButton = styled.button`
  width: 129px;
  height: 46px;
`;
