import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 12px;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    width: 338px;
    gap: 0;
  }

  & svg {
    position: absolute;
    left: 14px;
    top: 10px;
    stroke: #fafafa;
    width: 16px;
    height: 16px;

    @media (min-width: 768px) {
      width: 20px;
      height: 20px;
      left: 18px;
      top: 16px;
    }

    @media (min-width: 1440px) {
      width: 20px;
      height: 20px;
      left: 18px;
      top: 124px;
    }
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  color: var(--color-start-text);
  stroke-width: 1px;
  stroke: #fff;
  padding: 9px 9px 9px 42px;
  background: transparent;
  border-radius: 6px;
  border: 1px solid gray;
  outline: none;
  font-family: Poppins;
  font-size: 10px;
  line-height: 18px;
  letter-spacing: -0.2px;

  @media (min-width: 768px) {
    width: 259px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.28px;
    padding: 15px 15px 15px 51px;
  }

  @media (min-width: 1440px) {
    width: 339px;
    margin-bottom: 16px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.36px;
    padding: 17px 17px 17px 52px;
  }
`;

export const Button = styled.button`
  background-color: #8baa36;
  color: #fafafa;
  font-size: 14px;
  line-height: 16px;
  border: none;
  border-radius: 6px;
  padding: 11px 67px;
  cursor: pointer;
  transition: color var(--transition-time) var(--cubic);

  @media (min-width: 768px) {
    padding: 16px 50px;
    font-size: 16px;
    line-height: 18px;
  }

  @media (min-width: 1440px) {
    padding: 21px 126px;
  }

  &:hover {
    color: var(--color-text-primary);
  }
`;

export const FormTitle = styled.h2`
  display: none;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 14px;

  @media (min-width: 1440px) {
    display: block;
  }
`;

export const FormText = styled.p`
  display: none;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;
  margin-bottom: 28px;

  @media (min-width: 1440px) {
    display: block;
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  font-size: 12px;
  top: -14px;
  left: 4px;
  color: var(--color-warning);
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    top: 90px;
  }
`;

export const SuccessMessage = styled.p`
  position: absolute;
  font-size: 12px;
  top: -14px;
  left: 4px;
  color: var(--color-accent);
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    top: 90px;
  }
`;
