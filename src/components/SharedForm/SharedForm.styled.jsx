import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Field } from 'formik';
import bgMobile from '../../assets/svg/auth-form-bg/bg-registration-mobile.svg';
import bgTablet from '../../assets/svg/auth-form-bg/bg-registration-tablet.svg';
import bgDesktop from '../../assets/svg/auth-form-bg/bg-registration-desktop.svg';

export const Wrapper = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding-top: 87px;
  background-image: url(${bgMobile});
  background-size: 100% 490px;
  background-repeat: no-repeat;
  background-position: top 322px center;

  @media screen and (min-width: 768px) {
    padding-top: 96px;
    background-image: url(${bgTablet});
    background-size: 100% 606px;
    background-position: top 419px center;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    gap: 115px;
    justify-content: center;
    padding: 0;
    background-image: url(${bgDesktop});
    background-size: 100% 325px;
    background-position: bottom center;
  }
`;

export const Image = styled.img`
  width: 285px;
  height: 250px;

  @media screen and (min-width: 768px) {
    width: 409px;
    height: 359px;
  }
  @media screen and (min-width: 1440px) {
    width: 532px;
    height: 468px;
  }
`;

export const StyledForm = styled(Form)`
  box-sizing: border-box;
  margin-top: -32px;
  width: 335px;
  padding: 32px 28px;
  border-radius: 30px;
  background-color: var(--color-start-bg);

  @media screen and (min-width: 768px) {
    margin-top: -11px;
    width: 500px;
    padding: 50px;
  }
`;

export const WordForm = styled.h2`
  text-align: left;
  color: var(--color-start-text);
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.48px;
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: -0.56px;
    margin-bottom: 32px;
  }
`;

export const List = styled.ul`
  gap: 24px;
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
  list-style: none;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const FieldWrapper = styled.div`
  position: relative;

  & svg {
    position: absolute;
    width: 18px;
    height: 18px;
    left: 14px;
    top: 14px;
    stroke: #fafafa;

    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
      left: 18px;
      top: 18px;
    }
  }
`;

export const StyledField = styled(Field)`
  box-sizing: border-box;
  color: var(--color-start-text);
  width: 100%;
  stroke-width: 1px;
  stroke: #fff;
  padding: 12px 12px 12px 40px;
  background: transparent;
  border-radius: 6px;
  border: 1px solid gray;
  outline: none;
  font-family: Poppins;
  font-size: 14px;
  letter-spacing: -0.36px;

  &:focus,
  &:hover {
    border: 1px solid #fff;
  }

  @media screen and (min-width: 768px) {
    padding: 16px 16px 16px 50px;
    font-size: 18px;
  }
`;

export const SubButton = styled.button`
  padding: 12px;
  border-radius: 6px;
  width: 100%;
  background: var(--color-accent);
  color: var(--color-start-text);
  font-size: 16px;
  line-height: 18px;
  transition: color var(--transition-time) var(--cubic);

  &:hover {
    color: var(--color-icons);
  }
  @media screen and (min-width: 768px) {
    padding: 21px;
  }
`;

export const Router = styled(Link)`
  line-height: 57px;
  margin-top: 18px;
  text-decoration: underline;
  color: var(--color-start-text);
  transition: color var(--transition-time) var(--cubic);

  &:hover {
    color: var(--color-accent);
  }

    @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Error = styled.div`
  font-size: 12px;
  color: #e74a3b;
  position: absolute;
  bottom: -16px;
  & ~ input {
    border-color: var(--color-warning);
    color: var(--color-warning);
  }

  & ~ svg {
    stroke: var(--color-warning);
  }
`;
