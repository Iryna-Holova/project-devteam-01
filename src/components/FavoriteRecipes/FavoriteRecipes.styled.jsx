import styled from 'styled-components';

export const FavoriteRecipesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 43px;
  gap: 18px;

  @media screen and (min-width: 768px) {
    gap: 40px;
    padding-top: 97px;
  }
  @media screen and (min-width: 1440px) {
    gap: 50px;
    padding-top: 93px;
    margin-bottom: -100px;
  }
`;
