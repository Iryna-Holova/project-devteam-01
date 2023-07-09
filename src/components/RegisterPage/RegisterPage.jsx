import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm, WordForm, StyledField, List, SubButton,Router,Wrapper } from './RegisterPage.styled';

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

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// const validate = (values,props ) => {
//   return sleep(2000).then(() => {
//     const errors = {};
//     if (['admin', 'null', 'god'].includes(values.username)) {
//       errors.username = 'Nice try';
//     }
//     return errors;
//   });
// };

const RegisterPage = () => {

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
    <Wrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}        
      >
        {({ dirty }) => (
          <StyledForm>
            <WordForm>Registration</WordForm>
            <List>
              <li>
                <div>
                  <StyledField
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                  />
                  {/* <ErrorMessage name="name" component="div"   style={{ visibility: dirty ? 'visible' : 'hidden' }}/> */}
                </div>
              </li>
              <li>
                <div>
                  <StyledField
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                  {/* <ErrorMessage name="email" component="div"  style={{ visibility: dirty ? 'visible' : 'hidden' }}/> */}
                </div>
              </li>
              <li>
                <div>
                  <StyledField
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                  {/* <ErrorMessage name="password" component="div"  style={{ visibility: dirty ? 'visible' : 'hidden' }}/> */}
                </div>
              </li>
            </List>

            <SubButton type="submit">
              Sign up
            </SubButton>
          </StyledForm>
        )}
      </Formik>

      <Link to="/signin">
        <Router>Sign in</Router>
      </Link>
    </Wrapper>
  );
};

export default RegisterPage;
