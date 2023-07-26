import React, { useState } from 'react';
import { Formik, Field } from 'formik';
// import { updateProfile } from 'services/api/update-user';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/auth/operations';
import {
  StyledForm,
  AvatarInputWrapper,
  UserAvatar,
  AddPicture,
  NameInputWrapper,
  NameInput,
  EditButton
} from './EditProfileModal.styled';
import { BsPlus } from 'react-icons/bs';
import sprite from '../../../assets/sprite.svg';
import { HiOutlinePencil } from 'react-icons/hi';
const EditProfile = ({ closeModal, name, avatar }) => {
  const [selectedFile, setSelectedFile] = useState(avatar);
  const [formName, setFormName] = useState(name);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [selectedImageURL, setSelectedImageURL] = useState(avatar);

  const handleFormSubmit = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('avatar', selectedFile);
    formData.append('name', formName);

    try {
      // await updateProfile({ data: formData });

      await Promise.allSettled([dispatch(updateUser({ data: formData }))]);
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
    setSelectedFile(file);
    setSelectedImageURL(imageUrl);
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
        <StyledForm>
          <AvatarInputWrapper>
            <UserAvatar src={selectedImageURL} alt="Avatar" />
            <BsPlus />
            <AddPicture
              type="file"
              accept="image/*,.png,.jpg,.web,.gif,.png"
              name="avatar"
              onChange={handleFileChange}
            ></AddPicture>
          </AvatarInputWrapper>
          <NameInputWrapper>
            <NameInput
              type="text"
              id="name"
              name="name"
              value={formName}
              onChange={handleNameChange}
            ></NameInput>
            <svg>
              <use href={sprite + '#user'}></use>
            </svg>
            <HiOutlinePencil />
          </NameInputWrapper>

          <EditButton type="submit" onClick={handleFormSubmit} disabled={isLoading}>
            Save changes
          </EditButton>
        </StyledForm>
      </Formik>
    </>
  );
};

export default EditProfile;
