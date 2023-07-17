import React from 'react';
import PropTypes from 'prop-types';

import {BsFillCircleFill, BsFillSquareFill} from 'react-icons/bs'

import Title from './Title.styled';

const MainTitle = ({ className, children }) => {
  return (
    <Title className={"container"}>
      <h2 className={className}>{children}</h2>
      <BsFillCircleFill className='circle' />
      <BsFillSquareFill className='square left' />
      <BsFillSquareFill className='square right' />
      <BsFillSquareFill className='square center'/>
    </Title>
  );
};

MainTitle.propTypes = {
  children: PropTypes.node,
};

export default MainTitle;
