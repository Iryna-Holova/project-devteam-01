import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import sprite from '../../assets/sprite.svg';
import image from '../../assets/svg/order-food-pana.svg';
import {
  Image,
  StyledForm,
  WordForm,
  StyledField,
  List,
  SubButton,
  Router,
  Wrapper,
  Error,
  FieldWrapper,
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
      <div style={{ textAlign: 'center' }}>
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
                    <FieldWrapper>
                      <ErrorMessage name="name">
                        {msg => <Error>{msg}</Error>}
                      </ErrorMessage>
                      <svg>
                        <use href={sprite + '#user'}></use>
                      </svg>
                      <StyledField
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                      />
                    </FieldWrapper>
                  )}
                </li>
                <li>
                  <FieldWrapper>
                    <ErrorMessage name="email">
                      {msg => <Error>{msg}</Error>}
                    </ErrorMessage>
                    <svg>
                      <use href={sprite + '#email'}></use>
                    </svg>
                    <StyledField
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                  </FieldWrapper>
                </li>
                <li>
                  <FieldWrapper>
                    <ErrorMessage name="password">
                      {msg => <Error>{msg}</Error>}
                    </ErrorMessage>
                    <svg>
                      <use href={sprite + '#lock'}></use>
                    </svg>
                    <StyledField
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                  </FieldWrapper>
                </li>
              </List>

              <SubButton type="submit">{nameBut}</SubButton>
            </StyledForm>
          )}
        </Formik>

        <Router to={`/${urlRouter}`}>{router}</Router>
      </div>
      <Image src={image} alt="order food pana" />
    </Wrapper>
  );
};

export default SharedForm;
