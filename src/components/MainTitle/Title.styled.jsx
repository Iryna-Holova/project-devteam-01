import styled from 'styled-components';

const Title = styled.div`
  margin-top: 114px;

  & h2 {
    color: var(--color-text-main);
    font-size: 28px;
    line-height: 28px;
    letter-spacing: -0.56px;
  }

  @media screen and (min-width: 768px) {
    margin-top: 136px;
    & h2 {
      font-size: 32px;
      line-height: 32px;
      letter-spacing: -0.64px;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-top: 164px;
    & h2 {
      font-size: 44px;
      line-height: 44px;
      letter-spacing: -0.88px;
    }
  }
`;

export default Title;
