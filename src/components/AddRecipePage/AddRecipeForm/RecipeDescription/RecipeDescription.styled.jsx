import styled from 'styled-components';
import { Field } from 'formik';
import Select from 'react-select';

export const WrapperDescription = styled.div`
display: flex;
flex-direction: column;
gap: 32px;
margin-top:72px;
flex-wrap:no-wrap;

@media screen and (min-width: 768px) {
  flex-direction: row;
  margin-top:100px;
}
@media screen and (min-width: 1440px) {
  gap: 50px;
 margin-top:100px;
 flex-direction: row;
}
`;
export const StyledField = styled(Field)`
//width: 100%;
  padding: 0;
  padding-bottom: 18px;
  outline: none;
  border: none;
  border-bottom: 1px solid;
  border-color: #e0e0e0;
  background-color: #FAFAFA;
  font-size: 14px;
  color:black;
  

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  &::placeholder {
    color: black;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    opacity: 0.5;
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
`;
export const StyledFieldSelect = styled.select`
  padding: 0;
  padding-bottom: 18px;
  outline: none;
  border: none;
  border-bottom: 1px solid;
  border-color: #e0e0e0;
  background-color: #FAFAFA;
  font-size: 14px;
  color:black;
  text-align:right;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  &::placeholder {
    color: black;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    opacity: 0.5;
    text-align:right;
    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
`;
export const StyledSelectLabel = styled.label`
  padding-bottom: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  opacity: 0.5;
  color: black;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
export const AddFileInput = styled(Field)`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  font-size: 0;
  cursor: pointer;

`;
export const ImagePlaceholder = styled.div`
  position: relative;
  border-radius: 8px;
  background-color: var(--color-accent);
  width: 279px;
  height: 268px;
  
  @media screen and  (min-width: 1440px) {
   width: 357px;
   height: 344px;
  }

> svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--color-main);
  }
`;
export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 393px;

  @media screen and (max-width: 767px) {
    width: 343px;
    gap: 24px;
  }

  @media screen and (min-width: 768px)  {
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`;
export const PositionBox = styled.div`
  position: relative;
`;
export const StyledOption = styled.option`
font-family: 'Poppins', sans-serif;
font-size: 14px;
font-weight: 400;
line-height: 21px;
letter-spacing: -0.02em;
text-align: left;
`;
export const StyledSelect = styled(Select)`
  
`;

////  ||  То я взяв з твого SharedForm але чомусь криво вони працюють,
////  \/  певно тому що з форміком а в тебе дів звичайний був там        

// export const StyledErrorMessage = styled(ErrorMessage)`
// font-size: 12px;
// color: #e74a3b;
// position: absolute;
// bottom: -16px;
// & ~ input {
// border-color: var(--color-warning);
// color: var(--color-warning);
// }

// & ~ svg {
// stroke: var(--color-warning);
// }
// `;

