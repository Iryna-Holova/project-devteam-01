import React, { useState } from 'react';
import {
  WrapperDescription,
  ImagePlaceholder,
  AddFileInput,
  FieldWrapper,
  PositionBox,
  StyledField,
} from './RecipeDescription.styled';
import { ErrorMessage } from 'formik';
import { BsFullscreen } from 'react-icons/bs';
import { PiCameraFill } from 'react-icons/pi';
import Select from 'react-select';
// import AsyncSelect from 'react-select/async';

const RecipeDescription = ({ categories, handleFileChange, selectedFile, formikProps }) => {
  const { values, handleChange, setFieldValue } = formikProps;

  const imageUrl = selectedFile ? URL.createObjectURL(selectedFile) : null;

  const [times] = useState(Array.from({ length: 24 }, (_, index) => (index + 1) * 5).map(
    time => ({ label: `${time} min`, value: time })
  ));

  const handleTimeChange = (selectedOption) => {
    if (selectedOption) {
      setFieldValue('time', selectedOption.value);
    } else {
      setFieldValue('time', '');
    }
  };

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

        {/* <ErrorMessage name="category" component="div" /> */}
        <Select
        id="category"
        name="category"
        options={categories.map((category) => ({ label: category.name, value: category.name }))}
        value={categories.find((category) => category._id.$oid === values.category || '')}
        onChange={(selectedOption) => {
          if (selectedOption) {
            setFieldValue('category', selectedOption.value || null);
          } else {
            setFieldValue('category', null);
          }
        }}
        menuPlacement="auto"
        menuPosition="fixed"
        maxMenuHeight={7 * 28}
        placeholder="Select Category"
      />

        {/* <ErrorMessage name="time" component="div" /> */}
        {/* Не впевнений чи треба робити валідацію цих полів, 
        бо там за замовчуванням вже стоїть значення*/}
        <Select
          id="time"
          name="time"
          options={times}
          value={times.find(time => time.value === values.time)}
          onChange={(selectedOption) => handleTimeChange(selectedOption)}
          menuPlacement="auto"
          menuPosition="fixed"
          maxMenuHeight={7 * 28}
          placeholder="Select Preparation Time"
        />
      </FieldWrapper>
    </WrapperDescription>
  );
};

export default RecipeDescription;
