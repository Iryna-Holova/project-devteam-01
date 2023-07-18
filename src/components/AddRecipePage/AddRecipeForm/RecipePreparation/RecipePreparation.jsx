import React, { useEffect, useState } from 'react';
import { Field, useFormikContext } from 'formik';

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
    <div>
      <h2>Preparation</h2>
      <label htmlFor="preparation">Enter the preparation steps:</label>
      <Field
        as="textarea"
        id="preparation"
        name="preparation"
        value={values.preparation}
        onChange={handleTextareaChange}
      />
      {/* {То для того щоб було видно як має виглядати список у MyRecipes} */}
      <p>Preparation Array:</p>
      <ol>
        {preparation.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      {/* При стилізації то можна видалити */}
    </div>
  );
};

export default RecipePreparation;
