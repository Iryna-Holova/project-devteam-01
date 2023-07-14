import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';
import {
  StyledForm,
  WordForm,
  StyledField,
  List,
  SubButton,
  Router,
  Wrapper,
} from './SharedForm.styled';

// const isValidEmail = email => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// };

// const validate = (values) => {
//   const errors = {};

//   if (!values.email) {
//     errors.email = 'Введіть електронну адресу';
//   } else if (!isValidEmail(values.email)) {
//     errors.email = 'Введіть правильну електронну адресу';
//   }

//   if (!values.name) {
//     errors.name = 'Введіть ім\'я';
//   }

//   if (!values.password) {
//     errors.password = 'Введіть пароль';
//   } else if (values.password.length < 6) {
//     errors.password = 'Пароль повинен містити щонайменше 6 символів';
//   }

//   return errors;
// };

const SharedForm = ({
  initialValues,
  validationSchema,
  handleSubmit,
  router,
  nameForm,
  urlRouter,
  isRegisterForm,
  nameBut,
}) => {
  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <WordForm>{nameForm}</WordForm>
            <List>
              <li>
                {isRegisterForm && (
                  <div>
                    <StyledField
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                    />
                    <ErrorMessage name="name" component="div" />
                  </div>
                )}
              </li>
              <li>
                <div>
                  <StyledField
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                  />
                  <ErrorMessage name="email" component="div" />
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
                  <ErrorMessage name="password" component="div" />
                </div>
              </li>
            </List>

            <SubButton type="submit">{nameBut}</SubButton>
          </StyledForm>
        )}
      </Formik>

      <Link to={`/${urlRouter}`}>
        <Router>{router}</Router>
      </Link>
    </Wrapper>
  );
};

export default SharedForm;
