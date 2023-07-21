import React, { useEffect, useState } from 'react';
import { useFormikContext, ErrorMessage } from 'formik';
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
    const lines = text.split('\n').map(line => line.substring(0, 30));

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
      <ErrorMessage name="preparation" component="div" />
    </Wrapper>
  );
};

export default RecipePreparation;
