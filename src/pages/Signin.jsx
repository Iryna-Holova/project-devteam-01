import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

import { logIn } from 'redux/auth/operations';
import useAuth from 'hooks/use-auth';

import SharedForm from 'components/SharedForm/SharedForm';

const Signin = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, error } = useAuth();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Please enter your email'),
    password: Yup.string().min(6).required('Please enter your password'),
  });

  const handleSubmit = (values, { setSubmitting, setFieldTouched }) => {
    setFieldTouched('email', true);
    setFieldTouched('name', true);

    dispatch(
      logIn({
        email: values.email,
        password: values.password,
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
    if (status === 2) return navigate('/');
  }, [status, navigate]);

  return (
    <div>
      <SharedForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        handleSubmit={handleSubmit}
        router={'Registration'}
        urlRouter={'register'}
        nameForm={'Sign in'}
        nameBut={'Sign in'}
      />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Signin;
