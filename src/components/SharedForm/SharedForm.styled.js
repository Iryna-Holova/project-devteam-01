import { styled } from "styled-components";

import {
  Form,
  Field,
} from 'formik';

export const StyledForm = styled(Form)`
  max-width: 400px;
  max-height: 384px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #2a2c36;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 44px 50px;
`;

export const WordForm = styled.h2`
  color: #fafafa;
  font-size: 28px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: -0.56px;
  margin-bottom: 32px;
`;

export const StyledField = styled(Field)`
  width: 340px;
  flex-shrink: 0;
  stroke-width: 1px;
  stroke: #fff;

  padding-top: 16px;
  padding-bottom: 16px;


  padding-left: 50px;
  background: transparent;
  border-radius: 6px;
  border: 1px solid gray;
  color: #fafafa;
  outline: none;

  &::placeholder {
    color: #ffffff;

    font-family: Poppins;
    font-size: 18px;
    letter-spacing: -0.36px;
  }

  &:focus::placeholder {
    color: white;
  }

  &:focus,
  &:hover {
    border: 1px solid #fff;
  }
`;

export const List = styled.ul`
  gap: 24px;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const SubButton = styled.button`
  padding: 21px 138px;
  margin-top: 50px;
  cursor: pointer;
  border-radius: 6px;
  background: #8baa36;
  color: #fafafa;
  /* text-align: center; */
  font-family: Poppins;
  font-size: 16px;
  /* font-style: normal;
  font-weight: 400; 
  */
  border: none;
  line-height: 18px;
`;

export const Router = styled.p`
  color: black;
  margin-top: 18px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* height: 484px; */
`;