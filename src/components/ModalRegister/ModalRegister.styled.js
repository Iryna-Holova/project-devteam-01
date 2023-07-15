import { styled } from 'styled-components';

export const ModalOverplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  background: #2a2c36;
  
  margin: 0 30px;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  padding: 150px 0;
  border-radius: 30px;
  max-width: 700px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
