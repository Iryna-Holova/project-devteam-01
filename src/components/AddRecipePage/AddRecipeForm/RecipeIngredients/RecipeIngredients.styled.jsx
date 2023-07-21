import styled from 'styled-components';


export const FlexWrapper = styled.div`
  display: flex;
  width: 343px;
  height: 100%;
  margin-top: 67px;
  margin-bottom: 44px;
  justify-content: space-between;
  outline: none;

  border: none;
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 36px;
    margin-bottom: 32px;
    margin-top: 104px;
  }

  @media screen and (min-width: 1440px) {
    width: 609px;
  }
`;
export const StyledListWrapper = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 343px;

  justify-content: space-between;
  outline: none;
  border: none;

  border-color: #e0e0e0;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;
