import styled from 'styled-components';

export const FormContainer = styled.div`
  /* align-items: center;
  justify-content: center;
  margin-bottom: 110px;
  margin-top: 64px; */

  @media (max-width: 768px) {
    /* margin: 0; */
  }

  @media (max-width: 480px) {
    /* Стили для мобильных устройств */
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* max-width: 339px;
  margin-right: 100px; */

  @media (mix-width: 768px) {
    flex-direction: row;
    gap: 12px;
  }

  @media (min-width: 1440px) {
    width: 338px;
    gap: 0;
  }
`;

export const Input = styled.input`
box-sizing: border-box;
  font-size: 10px;
  letter-spacing: -0.2px;
  border-color: #fafafa;
  border-radius: 6px;
  padding: 10px 14px;
  /* margin-bottom: 16px; */
  /* width: 100%; */
  /* height: 58px; */
  /* cursor: pointer; */

  @media (min-width: 768px) {
    width: 259px;
    /* height: 45px; */
    font-size: 14px;
    letter-spacing: -0.28px;
    padding: 15px;
    /* margin-right: 12px;
    margin-bottom: 0; */
  }

  @media (min-width: 1440px) {
    width: 339px;
    margin-bottom: 16px;
    font-size: 18px;
    letter-spacing: -0.36px;
    padding: 16px 18px
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

  @media (min-width: 768px) {
    padding: 16px 50px;
    font-size: 16px;
    line-height: 18px;
  }

  @media (min-width: 1440px) {
    padding: 21px 126px;
  }
`;

export const ErrorMessage = styled.p`
  /* color: red;
  font-size: 14px;
  margin-top: 5px; */
`;

export const FormTitle = styled.h2`
  display: none;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 14px;

  @media (min-width: 1440px) {
    display: block;
  }
`;

export const FormText = styled.p`
  display: none;
  font-size: 14px;
  margin-bottom: 28px;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const SuccessMessage = styled.p`
  /* color: green;
  margin-bottom: 10px;
  font-size: 14px; */
`;
