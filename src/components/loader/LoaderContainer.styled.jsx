import styled from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 171px;
  height: ${props => props.$height || '171px'};

  @media (min-width: 768px) {
    height: ${props => props.$height || '281px'};
  }
`;
