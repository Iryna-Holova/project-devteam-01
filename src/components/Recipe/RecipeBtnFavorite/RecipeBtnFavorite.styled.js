import styled from 'styled-components';

export const RecipeBtn = styled.button`
  border: 1px solid #8BAA36;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  color: #22252A;
  padding: 10px 18px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  background-color: transparent;
  outline: none;
  border-radius: 30px 80px;
  text-align: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 18px 44px;
    border: 2px solid #8BAA36};
  }
  @media screen and (min-width: 1440px) {
  }

  :hover,
  :focus {
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    background: #8BAA36;
    color: #FAFAFA;
  }
`;