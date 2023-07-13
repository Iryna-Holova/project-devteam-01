import { styled } from 'styled-components';
import image from "../../assets/images/authNavPage/authNavBackgroundDesk.jpg"


export const ModalOverplay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

export const Modal = styled.div`
  padding: 20px;
  border-radius: 4px;
  /* width: 400px; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;


// export const But = styled.button`
//   padding: 21px 138px;
//   margin-top: 50px;
//   cursor: pointer;
//   border-radius: 6px;
//   background: #8baa36;
//   color: #fafafa;
//   font-family: Poppins;
//   font-size: 16px;
//   border: none;
//   line-height: 18px;
// `