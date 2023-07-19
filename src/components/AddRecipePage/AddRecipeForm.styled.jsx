import styled, { css } from 'styled-components';
import { Form } from 'formik';
const WrapperStyles = css`

  @media screen and (min-width: 343px) {
    width: 343px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
   min-width: 1240px;
  }
`;

export const Container = styled.div`
    ${WrapperStyles}
`;

export const AddRecipeButton = styled.button`
background-color: var(--color-icons);
color: var(--color-main);
padding: 14px 64px;
border-radius: 24px 44px;
display: flex;
gap: 4px;
align-items: center;
font-size: 14px;
font-weight: 400;
transition: background-color var(--transition-time) var(--cubic);
&:hover{
  background-color: var(--color-accent);
}
`;
export const FormStyled = styled(Form)`
  position: relative;
  margin-bottom: 72px;
  z-index: 2;
  margin-top: 72px;
  @media screen and (min-width: 768px) {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 200px;
  }
`;
