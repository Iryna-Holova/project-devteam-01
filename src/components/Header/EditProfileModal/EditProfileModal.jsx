import React, { useState } from 'react';
import { ModalOverplay, Modal } from './EditProfileModal.styled';
import { CgClose } from 'react-icons/cg';
import { Formik, Field } from 'formik';
import { updateProfile } from 'services/api/update-user';

const EditProfile = ({ closeModal, name, avatar }) => {
  const [selectedFile, setSelectedFile] = useState(avatar);
  const [formName, setFormName] = useState(name);

  const handleFormSubmit = async () => {
    const formData = new FormData();
    formData.append('avatar', selectedFile);
    formData.append('name', JSON.stringify(formName));
    console.log(formData);
    try {
      const response = await updateProfile({ data: formData });
      if (response) {
        console.log('added successfully:', response);
        closeModal();
      } else {
        console.log('Failed to add');
      }
    } catch (error) {
      console.log('Error adding:', error.message);
    }
  };
console.log(selectedFile);
  const handleFileChange = event => {
    const file = event.currentTarget.files[0];
    setSelectedFile(file);
  };

  const handleNameChange = event => {
    const newName = event.currentTarget.value;
    setFormName(newName);
  };
  return (
    <>
      <ModalOverplay>
        <Modal>
          <button onClick={closeModal}>
            <CgClose />
          </button>
          <Formik
            initialValues={{
              name: formName,
            }}
            onSubmit={handleFormSubmit}
          >
              <form>
                <div>
                  <img
                    src={selectedFile}
                    alt="Uploaded"
                    style={{ width: '100%', height: '100%' }}
                  />
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
                <button type="submit">Add</button>
              </form>
          </Formik>
        </Modal>
      </ModalOverplay>
    </>
  );
};

export default EditProfile;
