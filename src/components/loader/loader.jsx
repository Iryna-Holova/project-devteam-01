import React from 'react';
import { Bars } from 'react-loader-spinner';
import { LoaderContainer } from './loader.styled';

export const Loader = ({ className }) => (
  <LoaderContainer className={className}>
<Bars
  height="80"
  width="80"
  color='#ebf3d4'
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
  </LoaderContainer>
);
