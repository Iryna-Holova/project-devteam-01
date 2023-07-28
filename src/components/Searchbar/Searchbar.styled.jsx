import styled from 'styled-components';

export const SearchPageContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 200px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 50px;
  }
`;

export const Form = styled.form`
max-width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 28px;
  }
`;

export const InputWrapper = styled.div`
max-width: 100%;
  position: relative;
`;

export const Input = styled.input`
  font-family: inherit;
  padding: 16px 113px 16px 32px;
  max-width: 100%;
  width: 295px;
  font-size: 12px;
  line-height: 21px;
  border: none;
  outline: none;
  border-radius: 24px 44px;
  color: var(--color-text);
  background-color: var(--color-secondary);

  @media screen and (min-width: 768px) {
    width: 368px;
    padding: 18px 161px 18px 38px;
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 510px;
    padding: 23px 161px 23px 48px;
    line-height: 24px;
  }
`;

export const Btn = styled.button`
  width: 113px;
  height: 55px;
  padding: 17px 32px;
  position: absolute;
  top: -1px;
  right: -1px;
  font-size: 14px;
  line-height: 21px;
  background-color: var(--color-accent);
  color: var(--color-main);
  border-radius: 24px 44px;
  transition: background-color var(--transition-time) var(--cubic);

  &:hover,
  &:focus {
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
    height: 72px;
    padding: 24px 52px;
    font-size: 16px;
  }

  &.styles-for-main {
    background-color: var(--color-black-accent);

    &:hover,
    &:focus {
      background-color: var(--color-accent-white);
    }
  }
`;

export const Label = styled.label`
  font-size: 12px;
    font-weight: 500;
    color: var(--color-text-primary);
    letter-spacing: -0.24px;
    line-height: 1.3;

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
