import React from 'react';
import SharedForm from 'components/SharedForm/SharedForm';
import * as Yup from 'yup';

const RegisterPage = () => {
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

  const handleSubmit = (values, { setSubmitting, setFieldTouched }) => {
    setFieldTouched('email', true);
    setFieldTouched('name', true);

    if (values.email === '' || values.name === '') {
      console.log('Порожні поля');
    } else {
      console.log('Всі поля заповнені');
    }

    setSubmitting(false);
  };

  return (
    <div>
      <SharedForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        handleSubmit={handleSubmit}
        router={"Sign in"}
        urlRouter={"signin"}
        nameForm={"Registration"}
        isRegisterForm 
      />
    </div>
  );
};

export default RegisterPage;

