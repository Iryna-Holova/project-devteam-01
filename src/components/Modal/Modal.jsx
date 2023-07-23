import { useRef } from 'react';
import { CgClose } from 'react-icons/cg';
import { CSSTransition } from 'react-transition-group';

import {
  ModalOverlay,
  ModalBody,
  ModalTitle,
  ModalClose,
  ModalContent,
} from './Modal.styled';

const Modal = ({ openState, onModalClose, children, title, className }) => {
  const nodeRef = useRef(null);
    // console.log(openState);
  return (
    <CSSTransition
      in={openState}
      nodeRef={nodeRef}
      timeout={250}
      classNames="my-node"
      unmountOnExit
    >
      <ModalOverlay ref={nodeRef} onClick={onModalClose} className={className}>
        <ModalBody
          onClick={e => e.stopPropagation()}
        >
          <ModalClose onClick={onModalClose}>
            <CgClose />
          </ModalClose>
          {title && (
            <>
              <ModalTitle>{title}</ModalTitle>
              <hr style={{ width: '100%' }} />
            </>
          )}
          <ModalContent>{children}</ModalContent>
        </ModalBody>
      </ModalOverlay>
    </CSSTransition>
  );
};

export default Modal;
