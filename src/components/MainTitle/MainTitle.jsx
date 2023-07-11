import React from 'react';
import PropTypes from 'prop-types';
import Title from './MainTitle.styled';

const MainTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

MainTitle.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MainTitle;
