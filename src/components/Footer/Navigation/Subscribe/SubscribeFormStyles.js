import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 110px;
  margin-top: 64px;

  @media (max-width: 768px) {
    margin: 0;
  }

  @media (max-width: 480px) {
    /* Стили для мобильных устройств */
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 339px;
  margin-right: 100px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 20px;
    max-width: 458px;
    margin: 0;
  }

  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0;
  }
`;

export const Input = styled.input`
  font-size: 18px;
  border-color: #fafafa;
  border-radius: 6px;
  margin-bottom: 16px;
  max-width: 100%;
  height: 58px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 243px;
    height: 45px;
    font-size: 14px;
    line-height: 21px;
    margin-right: 12px;
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    width: 188px;
    height: 38px;
    margin: 0;
    margin-bottom: 8px;
  }
`;

export const Button = styled.button`
  background-color: #8baa36;
  color: #fafafa;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  cursor: pointer;
  max-width: 339px;
  height: 59px;

  @media (max-width: 768px) {
    width: 187px;
    height: 50px;
  }

  @media (max-width: 480px) {
    width: 204px;
    height: 38px;
    margin-bottom: 8px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export const FormTitle = styled.h2`
  font-weight: bold;
  font-size: 18px;
  color: #fafafa;
  margin-bottom: 14px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FormText = styled.p`
  font-size: 14px;
  color: #fafafa;
  margin-bottom: 28px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SuccessMessage = styled.p`
  color: green;
  margin-bottom: 10px;
  font-size: 14px;
`;
