import React from 'react';
import { ModalOverplay, Modal } from './ModalRegister.styled';
import { SubButton } from 'components/SharedForm/SharedForm.styled';
import { Link } from 'react-router-dom';
import { InfoP, WelcomeWords } from 'pages/Start/Start.styled';

const ModalRegister = ({ closeModal }) => {
  return (
    <>
      <ModalOverplay>
        <Modal style={{backgroundColor: '#2A2C36'}}>
          <WelcomeWords>You have successfully registered</WelcomeWords>
          <InfoP>Please go to your mail for verification</InfoP>
          <Link to="/start">
            <SubButton onClick={closeModal}>Ok</SubButton>
          </Link>
        </Modal>
      </ModalOverplay>
    </>
  );
};

export default ModalRegister;
