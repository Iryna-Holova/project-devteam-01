import styled from 'styled-components';

export const Image = styled.img`
display: inline-block;
  margin-top: 50px;
  width: 259px;
  height: 170px;

  @media screen and (min-width: 768px) {
    margin-top: -4px;
    width: 498px;
    height: 327px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: -10px;
    height: 331px;
  }
`;

export const Title = styled.p`
  margin-top: 14px;
  color: var(--color-text-primary);
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: -0.36px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    font-size: 24px;
    line-height: 24px;
    letter-spacing: -0.48px;
  }
`;

export const Text = styled.p`
  width: 206px;
  margin: 8px auto 100px auto;
  color: var(--color-text-primary);
  opacity: 0.5;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    width: auto;
    margin-top: 14px;
    margin-bottom: 204px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.36px;
  }
`;
