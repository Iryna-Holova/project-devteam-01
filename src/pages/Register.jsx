import React from 'react';
import SharedForm from 'components/SharedForm/SharedForm';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import * as Yup from 'yup';

const Register = () => {
  const dispatch = useDispatch();

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

  const handleSubmit = (values, { setSubmitting, setFieldTouched,resetForm }) => {
    setFieldTouched('email', true);
    setFieldTouched('name', true);

    if (values.email === '' || values.name === '') {
      console.log('Порожні поля');
    } else {
      console.log('Всі поля заповнені');
      dispatch(register({
        name: values.name,
        email: values.email,
        password: values.password,
      }))
      console.log(register);
      resetForm();
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
    </div>
  );
};

export default Register;
