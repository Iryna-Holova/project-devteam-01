import styled from 'styled-components';

const Title = styled.h2`
  margin-top: 50px;
  color: #001833;
  font-size: 28px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: -0.56px;
  @media screen and (min-width: 768px) {
    margin-top: 72px;
    font-size: 32px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 100px;
    font-size: 44px;
  }
`;

export default Title;
