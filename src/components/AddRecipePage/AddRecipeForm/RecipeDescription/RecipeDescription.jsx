import React from 'react';
import {
  WrapperDescription,
  StyledField,
  ImagePlaceholder,
  AddFileInput,
  FieldWrapper,
  PositionBox,
  StyledOption,
} from './RecipeDescription.styled';
import { ErrorMessage } from 'formik';
import { BsFullscreen } from 'react-icons/bs';
import { PiCameraFill } from 'react-icons/pi';

const RecipeDescription = ({ categories, handleFileChange, selectedFile, formikProps }) => {
  const { values, handleChange } = formikProps;

  const imageUrl = selectedFile ? URL.createObjectURL(selectedFile) : null;

  return (
    <WrapperDescription style={{ margin: 0 }}>
      <ImagePlaceholder>
      {imageUrl ? (
          <img src={imageUrl} alt="Uploaded" style={{ width: '100%', height: '100%' }} />
        ) : (
          <>
            <BsFullscreen style={{ width: '40px', height: '40px' }} />
            <PiCameraFill />
          </>
        )}
        <AddFileInput
          type="file"
          accept="image/*,.png,.jpg,.web,.gif,.png"
          name="image"
          onChange={handleFileChange}
        ></AddFileInput>
      </ImagePlaceholder>
      <ErrorMessage name="image" component="div" />
      <FieldWrapper>
        <PositionBox>
          <StyledField
            type="text"
            id="title"
            name="title"
            placeholder="Enter item title"
            value={values.title} 
            onChange={handleChange} 
          />
        </PositionBox>
        <ErrorMessage name="title" component="div" />
        <PositionBox>
          <StyledField
            as="textarea"
            id="description"
            name="description"
            placeholder="Enter about recipe"
            value={values.description} 
            onChange={handleChange} 
          />
        </PositionBox>
        <ErrorMessage name="description" component="div" />

        <StyledField
          as="select"
          id="category"
          name="category"
          placeholder="Category"
          value={values.category} 
          onChange={handleChange} 
        >
          {categories && Array.isArray(categories) ? (
            categories.map(category => (
              <StyledOption key={category._id.$oid} value={category._id.$oid}>
                {category.name}
              </StyledOption>
            ))
          ) : (
            <StyledOption value="">No categories available</StyledOption>
          )}
        </StyledField>

        <StyledField
          as="select"
          id="time"
          name="time"
          placeholder="Cooking time"
          value={values.time} 
          onChange={handleChange} 
        >
          {Array.from({ length: 24 }, (_, index) => (index + 1) * 5).map(
            time => (
              <StyledOption key={time} value={time}>
                {time} min
              </StyledOption>
            )
          )}
        </StyledField>
      </FieldWrapper>
    </WrapperDescription>
  );
};

export default RecipeDescription;
