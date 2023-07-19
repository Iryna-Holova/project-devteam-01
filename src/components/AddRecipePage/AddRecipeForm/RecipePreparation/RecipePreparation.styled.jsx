import styled from 'styled-components';
import { Field, useFormikContext } from 'formik';
export const StyledPreparationField = styled(Field)`
  display: flex;

  font-size: 14px;
  line-height: 21px;

  line-height: 21px;
  letter-spacing: -0.02em;
  margin-top: 24px;

  outline: none;

  width: 343px;
  height: 154px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: none;
  border-radius: 6px;

  background-color: rgba(217, 217, 217, 0.16);

  color: #000000;
  opacity: 0.5;

  &::placeholder {
    color: #000000;
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    width: 505px;
    height: 224px;
    padding-left: 22px;
    padding-right: 22px;
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: 18px;
    margin-top: 32px;
  }

  &:focus-within,
  &:focus-within::placeholder {
    color: #23262a;
    opacity: 1;
  }
`;
export const SubTitleStyled = styled.h3`
  margin-bottom: 0px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: #3e4462;
`;
export const PositionBox = styled.div`
  position: relative;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;
export const Wrapper = styled.div`
  width: 343px;

  margin-top: 67px;
  margin-bottom: 18px;

  outline: none;
  border: none;
  @media screen and (min-width: 768px) {
    width: 398px;
    margin-top: 67px;
    margin-bottom: 18px;
  }
`;
