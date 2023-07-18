import React from 'react';
import { Field, ErrorMessage } from 'formik';

const RecipeDescription = ({ categories, handleFileChange, selectedFile }) => {
  // const { values, setFieldValue } = useFormikContext();

  return (
    <div>
      <h2>Recipe Description</h2>
      <label htmlFor="thumb">Thumb:</label>
      <input type="file" id="thumb" name="thumb" onChange={handleFileChange} />
      <ErrorMessage name="thumb" component="div" />

      <label htmlFor="title">Title:</label>
      <Field type="text" id="title" name="title" placeholder="Enter item title" />

      <label htmlFor="description">Description:</label>
      <Field as="textarea" id="description" name="description" placeholder="Enter about recipe" />

      <label htmlFor="category">Category:</label>
      <Field as="select" id="category" name="category">
        <option value="">Select a category</option>
        {categories && Array.isArray(categories) ? (
          categories.map((category) => (
            <option key={category._id.$oid} value={category._id.$oid}>
              {category.name}
            </option>
          ))
        ) : (
          <option value="">No categories available</option>
        )}
      </Field>

      <label htmlFor="time">Preparation Time:</label>
      <Field as="select" id="time" name="time">
        <option value="">Select cooking time</option>
        {Array.from({ length: 24 }, (_, index) => (index + 1) * 5).map((time) => (
          <option key={time} value={time}>
            {time} min
          </option>
        ))}
      </Field>
    </div>
  );
};

export default RecipeDescription;
