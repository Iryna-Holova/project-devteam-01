import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { updateProfile } from 'services/api/update-user';
import { toast } from 'react-hot-toast';

const EditProfile = ({ closeModal, name, avatar }) => {
  const [selectedFile, setSelectedFile] = useState(avatar);
  const [formName, setFormName] = useState(name);
  const [
    isLoading,
    setIsLoading] = useState(false);

  const handleFormSubmit = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('avatar', selectedFile);
    formData.append('name', formName);

    try {
      await updateProfile({ data: formData });
      closeModal();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = event => {
    const file = event.currentTarget.files[0];
    const imageUrl = URL.createObjectURL(file);
    setSelectedFile(imageUrl);
  };

  const handleNameChange = event => {
    const newName = event.currentTarget.value;
    setFormName(newName);
  };
  return (
    <>
      <Formik
        initialValues={{
          name: formName,
        }}
        onSubmit={handleFormSubmit}
      >
        <Form>
          <div>
            <img src={selectedFile} alt="Avatar" />
            <Field
              type="file"
              accept="image/*,.png,.jpg,.web,.gif,.png"
              name="avatar"
              onChange={handleFileChange}
            ></Field>
          </div>
          <Field
            type="text"
            id="name"
            name="name"
            value={formName}
            onChange={handleNameChange}
          ></Field>
          <button type="submit" onClick={handleFormSubmit} disabled={isLoading}>
            Add
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default EditProfile;
