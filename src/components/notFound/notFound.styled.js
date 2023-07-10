import styled from 'styled-components';

export const Box = styled.div`
  text-align: center;
  margin-top: 14px;
  @media screen and (min-width: 768px){
    margin-top: 32px;
  }
`
export const Title = styled.p`
  
  font-size: 18px;
  letter-spacing: -0.02em;
  font-weight: bold;
  
  @media screen and (min-width: 768px){
    font-size: 24px;
  }
 `
export const Text = styled.p`
  margin-top: 8px;
  font-size: 14px;
  letter-spacing: -0.02em;
  @media screen and (max-width: 767px){ 
    margin-left: auto;
    margin-right: auto;
    width: 208px;
  }
  @media screen and (min-width: 768px){
    margin-top: 16px;
    font-size: 18px;
  }
`
//  media screen and (max-width: 767px){  - это максимальное для мобилки