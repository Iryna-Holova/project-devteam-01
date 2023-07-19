import styled from 'styled-components';
import { Container } from 'components/AddRecipePage/AddRecipeForm.styled';

export const AddRecipeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: var(--color-main) 
  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const FlexWrapper = styled.div`
  display: block;
`;

export const SideFlexWrapper = styled(FlexWrapper)`
  @media screen and (min-width: 1440px) {
    margin-left: 106px;
    padding-top: 144px;
  }
`;
