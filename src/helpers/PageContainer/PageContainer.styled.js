import styled, { keyframes } from "styled-components";

// eslint-disable-next-line
const bgCol = "#22252A"; 
// eslint-disable-next-line
const greenColor = "#8BAA36";
const rotateAnimation = keyframes`
0%{transform: rotate(0deg)};
100%{
    transform: rotate(360deg);
}`;

export const Box = styled.div`
  position: absolute;
  top: 20px;
  left: calc(50% - 200px);

  @media screen and (min-width:767.98px) {
    top: 30px;
    left: calc(50% - 400px);
  }

  @media screen and (min-width:1439.98px) {
    top: 30px;
    left: calc(50% - 725px);
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  padding: 114px 16px 100px 16px;

  @media screen and (min-width:767.98px) {
    padding: 136px 32px 200px 32px;
  }
  @media screen and (min-width:1439.98px) {
    padding: 164px 100px 100px 100px;
  }
  max-width: 1440px;
`;

export const RotateBlock = styled.div`
  position: absolute;
  width: ${(p) => p.width | 6}px;
  height: ${(p) => p.height || 6}px;
  top: ${(p) => p.top || 76}px;
  left: ${(p) => p.left || 50}px;

  border-radius: 3px;
  background: ${bgCol || greenColor};

  animation: ${rotateAnimation} 1600ms infinite linear;
  @media screen and (min-width:374.98px) {
    width: ${(p) => p.width || 8}px;
    height: ${(p) => p.height || 8}px;
    top: ${(p) => p.top || 76}px;
    left: ${(p) => p.left || 120}px;
  }

  @media screen and (min-width:767.98px) {
    width: ${(p) => p.width || 14}px;
    height: ${(p) => p.height || 14}px;
    top: ${(p) => p.top || 85};
    left: ${(p) => p.left || 219}px;
  }

  @media screen and (min-width:1439.98px) {
    top: ${(p) => p.top || 52};
    left: ${(p) => p.left || 328}px;
  } ;
`;