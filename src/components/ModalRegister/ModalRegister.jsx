import React from 'react';
import { ModalOverplay, Modal } from './ModalRegister.styled';
import { WelcomeWords, InfoP } from 'components/StartPage/StartPage.styled';
import { SubButton } from 'components/SharedForm/SharedForm.styled';
import { Link } from 'react-router-dom';

const ModalRegister = ({ closeModal }) => {
  return (
    <>
      <ModalOverplay>
        <Modal>
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
