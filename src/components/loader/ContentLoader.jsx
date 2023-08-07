import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { LoaderContainer } from './LoaderContainer.styled';

const ContentLoader = ({height}) => (
  <LoaderContainer $height={height}  className='container'>
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#ebf3d4"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </LoaderContainer>
);

export default ContentLoader;
