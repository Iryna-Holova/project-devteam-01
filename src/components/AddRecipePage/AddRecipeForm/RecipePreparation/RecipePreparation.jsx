import React, { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';
import{
  SubTitleStyled, StyledPreparationField,PositionBox, Wrapper
}from './RecipePreparation.styled';
const RecipePreparation = () => {
  const { values, setFieldValue } = useFormikContext();
  const [preparation, setPreparation] = useState([]);

  useEffect(() => {
    setFieldValue('preparation', preparation.join('\n'));
  }, [preparation, setFieldValue]);

  const handleTextareaChange = (event) => {
    const text = event.target.value;
    const lines = text.split('\n');

    setPreparation(lines);
  };

  return (
    <Wrapper>
      <SubTitleStyled>Preparation</SubTitleStyled>
      <PositionBox>
      <StyledPreparationField
        as="textarea"
        id="preparation"
        name="preparation"
        value={values.preparation}
        onChange={handleTextareaChange}
        placeholder="Enter recipe"
      />
      </PositionBox>
    </Wrapper>
  );
};

export default RecipePreparation;
