import styled from 'styled-components';

const Title = styled.div`
  margin-top: 114px;

  & h2 {
    color: var(--color-text-main);
    font-size: 28px;
    line-height: 28px;
    letter-spacing: -0.56px;
    
    &.invisible {
      color: transparent;
    }
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

//TODO: compare and normalize styles for h2
//const Title = styled.h2`
//padding-top: 50px;
//color: #001833;
//font-size: 28px;
//font-weight: 600;
//line-height: 1.0;
//letter-spacing: -0.56px;

//@media screen and (min-width: 768px) {
    //font-size: 44px;
    //letter-spacing: -0.88px;
//}
`;

export default Title;
