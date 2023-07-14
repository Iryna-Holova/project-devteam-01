import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title.styled';

const MainTitle = ({ children }) => {
  return <div className='container'><Title>{children}</Title></div>;
};

MainTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTitle;
