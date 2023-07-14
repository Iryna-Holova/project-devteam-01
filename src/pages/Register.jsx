import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import * as Yup from 'yup';
import { useState } from 'react';
import SharedForm from 'components/SharedForm/SharedForm';
import ModalRegister from 'components/ModalRegister/ModalRegister';

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    name: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = (
    values,
    { setSubmitting, setFieldTouched, resetForm }
  ) => {
    setFieldTouched('email', true);
    setFieldTouched('name', true);

    if (values.email === '' || values.name === '') {
      console.log('Порожні поля');
    } else {
      console.log('Всі поля заповнені');
      dispatch(
        register({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
      resetForm();
      openModal();
    }

    setSubmitting(false);
  };

  return (
    <div>
      <SharedForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        handleSubmit={handleSubmit}
        router={'Sign in'}
        urlRouter={'signin'}
        nameForm={'Registration'}
        nameBut={'Sign up'}
        isRegisterForm
      />

      {isModalOpen && <ModalRegister closeModal={closeModal}/>}
    </div>
  );
};

export default Register;
