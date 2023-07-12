import styled from 'styled-components';

// const setBackgroundColor = props => {
//   if (props.backgroundColor === '#22252A') {
//     return '#FAFAFA';
//   } else if (props.backgroundColor === '#FAFAFA') {
//     return '#22252A';
//   }
//   return props.backgroundColor;
// };

export const StyledBtn = styled.button`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.textColor};
  border-radius: ${props => props.borderRadius};
  border: ${props => props.border};
  background-color: ${props => props.backgroundColor};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  filter: ${props => props.filter};
  cursor: pointer;
  

  &:hover {
    background-color: #FAFAFA;
    transform: scale(0.95);
  }
`;
