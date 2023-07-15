import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title.styled';

const MainTitle = ({ children }) => {
  return (
    <Title className="container">
      <h2>{children}</h2>
    </Title>
  );
};

MainTitle.propTypes = {
  children: PropTypes.node,
};

export default MainTitle;
