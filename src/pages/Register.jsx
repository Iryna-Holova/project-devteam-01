import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import * as Yup from 'yup';
import { useState } from 'react';
import SharedForm from 'components/SharedForm/SharedForm';
import ModalRegister from 'components/ModalRegister/ModalRegister';
import {
  // REJECTED,
  RESOLVED,
} from 'utils/constants';
import useAuth from 'hooks/use-auth';

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const { status } = useAuth();

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
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Please enter your email'),
    name: Yup.string().required('Please enter your name'),
    password: Yup.string().required('Please enter your password'),
  });

  const handleSubmit = (
    values,
    { setSubmitting, setFieldTouched }
  ) => {
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
    if (status === RESOLVED) {
      openModal();
    }
        // if (status === REJECTED) alert('Registration failed');
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
    </div>
  );
};

export default Register;
