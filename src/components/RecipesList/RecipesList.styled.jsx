import styled from 'styled-components';

export const RecipesListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media (min-width: 768px) {
    gap: 40px;
  }
  @media (min-width: 1440px) {
    gap: 50px;
  }
`;
