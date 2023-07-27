import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Input = styled.input`
  font-family: inherit;
  padding: 17px 113px 17px 32px;
  max-width: 295px;
  width: 295px;
  font-size: 12px;
  line-height: 18px;
  border: none;
  outline: none;
  border-radius: 24px 44px;
  background-color: var(--color-secondary);

  @media screen and (min-width: 768px) {
    max-width: 368px;
    width: 368px;
    padding: 18px 161px 18px 38px;
    font-size: 16px;
    line-height: 23px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 510px;
    width: 510px;
    padding: 23px 161px 23px 48px;
    line-height: 24px;
  }
`;

export const Btn = styled.button`
  width: 113px;
  height: 53px;
  padding: 16px 32px;
  position: absolute;
  top: -1px;
  right: -1px;
  font-size: 14px;
  background-color: var(--color-accent);
  color: var(--color-main);
  border-radius: 24px 44px;

  &:hover,
  &:focus {
    transition: background-color var(--transition-time) var(--cubic);
    background-color: var(--color-icons);
  }

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 59px;
    padding: 16px 52px;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 161px;
    height: 70px;
    padding: 23px 52px;
    font-size: 16px;
  }

  &.styles-for-main {
    /* background-color: var(--color-icons); */

    &:hover,
    &:focus {
      transition: background-color var(--transition-time) var(--cubic);
      background-color: var(--color-accent);
    }
  }
`;

export const Label = styled.label`
  /* margin-bottom: 50px; */
  /* font-size: 12px;
    font-weight: 500;
    color: var(--color-text-primary);
    letter-spacing: -0.24px;
    line-height: 1.3; */

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    letter-spacing: -0.24px;
  }
`;

export const Select = styled.select`
  width: 146px;
  height: 34px;
  /* margin-left: 15px; */
  border: none;
  background-color: var(--color-input);
  opacity: 0.15700000524520874;
  border-radius: 0px 0px 6px 6px;

  @media screen and (min-width: 768px) {
    width: 175px;
    height: 41px;
    margin-left: 18px;
  }

  @media screen and (min-width: 1440px) {
    width: 198px;
    height: 49px;
  }
`;

export const Option = styled.option`
  font-size: 12px;
  color: var(--color-option);
  opacity: 0.5;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    letter-spacing: -0.28px;
  }
`;

export const Div = styled.div`
  position: relative;
  /* margin-top: 50px;
    margin-bottom: 24px; */

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const MainSearchContainer = styled.div`
  /* margin-bottom: 147px; */
  /* position: relative;
    top: -180px;
    margin-top: 0px;
    margin-bottom: 0px; */

  @media screen and (min-width: 768px) {
    width: 362px;
    height: 59px;
    top: -390px;
    left: -150px;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 510px;
    height: 70px;
    top: -540px;
    left: -350px;
  }
`;
