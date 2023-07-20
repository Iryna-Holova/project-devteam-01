import React, { useEffect } from 'react';
import SharedForm from 'components/SharedForm/SharedForm';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import useAuth from 'hooks/use-auth';
import {
  // REJECTED,
  RESOLVED
} from 'utils/constants';

const Signin = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useAuth();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Please enter a valid email')
      .required('Please enter your email'),
    password: Yup.string().required('Please enter your password'),
  });

  const handleSubmit = (
    values,
    { setSubmitting, setFieldTouched }
  ) => {
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
    if (status === RESOLVED) return navigate('/');
    // if (status === REJECTED) alert('Invalid email or password');
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
    </div>
  );
};

export default Signin;
