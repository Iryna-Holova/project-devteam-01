import { styled } from 'styled-components';

import tablet1x from '../../assets/images/no-data-image/no-data-image-tablet-1x.webp';
import tablet2x from '../../assets/images/no-data-image/no-data-image-tablet-2x.webp';
import mobile1x from '../../assets/images/no-data-image/no-data-image-mobile-1x.webp';
import mobile2x from '../../assets/images/no-data-image/no-data-image-mobile-2x.webp';

export const MessageWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;

export const NoDataImage = styled.div`
  width: 208px;
  height: 133px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: -webkit-image-set(url(${mobile1x}) 1x, url(${mobile2x}) 2x);

  @media (min-width: 768px) {
    width: 350px;
    height: 225px;
    background-image: -webkit-image-set(
      url(${tablet1x}) 1x,
      url(${tablet2x}) 2x
    );
  }
`;

export const MessageText = styled.p`
  color: black;
  opacity: 0.5;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.28px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.48px;
  }
`;
