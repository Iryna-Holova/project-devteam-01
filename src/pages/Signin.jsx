import React from 'react';
import SharedForm from 'components/SharedForm/SharedForm';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const Signin = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch;

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleSubmit = (values, { setSubmitting, setFieldTouched }) => {
    setFieldTouched('email', true);
    setFieldTouched('name', true);

    if (values.email === '') {
      console.log('Порожні поля');
    } else {
      console.log('Всі поля заповнені');
      dispatch(
        logIn({
          email: values.email,
          password: values.password,
        })
      );
    }

    setSubmitting(false);
  };

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
