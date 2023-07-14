import React from 'react';
import { ModalOverplay,Modal } from './ModalRegister.styled';
import { WelcomeWords,InfoP} from 'components/StartPage/StartPage.styled';
import { SubButton } from 'components/SharedForm/SharedForm.styled';

const ModalRegister = ({closeModal}) => {
  return (
    <>
      <ModalOverplay>
        <Modal>
        <WelcomeWords>You have successfully registered</WelcomeWords>
          <InfoP>Please go to your mail for verification</InfoP>
          <SubButton onClick={closeModal}>Return to registration</SubButton>
        </Modal>
      </ModalOverplay>
    </>
  );
};

export default ModalRegister;
