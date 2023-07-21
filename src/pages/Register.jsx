import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

import { register } from 'redux/auth/operations';
import useAuth from 'hooks/use-auth';

import SharedForm from 'components/SharedForm/SharedForm';
import ModalRegister from 'components/ModalRegister/ModalRegister';

const Register = () => {
    const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const { status, error } = useAuth();


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Please enter your email'),
    name: Yup.string().required('Please enter your name'),
    password: Yup.string().min(6).required('Please enter your password'),
  });

  const handleSubmit = (values, { setSubmitting, setFieldTouched }) => {
    setFieldTouched('email', true);
    setFieldTouched('name', true);

    dispatch(
      register({
        user: {
          name: values.name,
          email: values.email,
          password: values.password,
        },
      })
    );
    setSubmitting(false);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (status === 2) {
      openModal();
    }
  }, [status]);

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
      {isModalOpen && <ModalRegister closeModal={closeModal} />}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Register;
