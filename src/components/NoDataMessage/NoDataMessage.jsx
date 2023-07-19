import React from 'react';
import PropTypes from 'prop-types';
import {
  NoDataImage,
  MessageText,
  MessageWrapper,
} from './NoDataMessage.styled';

const NoDataMessage = ({ children }) => {
  return (
    <MessageWrapper className="container">
      <NoDataImage />
      <MessageText>{children}</MessageText>
    </MessageWrapper>
  );
};

NoDataMessage.propTypes = {
  children: PropTypes.node,
};

export default NoDataMessage;
