import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import sprite from '../../assets/images.svg';

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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                      >
                        <g opacity="0.8">
                          <path
                            d="M15 16.25C15 15.2033 15 14.68 14.8708 14.2541C14.58 13.2953 13.8297 12.545 12.8709 12.2542C12.445 12.125 11.9217 12.125 10.875 12.125H7.125C6.07833 12.125 5.55499 12.125 5.12914 12.2542C4.17034 12.545 3.42003 13.2953 3.12918 14.2541C3 14.68 3 15.2033 3 16.25M12.375 6.125C12.375 7.98896 10.864 9.5 9 9.5C7.13604 9.5 5.625 7.98896 5.625 6.125C5.625 4.26104 7.13604 2.75 9 2.75C10.864 2.75 12.375 4.26104 12.375 6.125Z"
                            stroke="#FAFAFA"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <g opacity="0.8">
                        <path
                          d="M1.5 5.75L7.62369 10.0366C8.11957 10.3837 8.36751 10.5573 8.6372 10.6245C8.87542 10.6839 9.12458 10.6839 9.3628 10.6245C9.63249 10.5573 9.88043 10.3837 10.3763 10.0366L16.5 5.75M5.1 15.5H12.9C14.1601 15.5 14.7902 15.5 15.2715 15.2548C15.6948 15.039 16.039 14.6948 16.2548 14.2715C16.5 13.7902 16.5 13.1601 16.5 11.9V7.1C16.5 5.83988 16.5 5.20982 16.2548 4.72852C16.039 4.30516 15.6948 3.96095 15.2715 3.74524C14.7902 3.5 14.1601 3.5 12.9 3.5H5.1C3.83988 3.5 3.20982 3.5 2.72852 3.74524C2.30516 3.96095 1.96095 4.30516 1.74524 4.72852C1.5 5.20982 1.5 5.83988 1.5 7.1V11.9C1.5 13.1601 1.5 13.7902 1.74524 14.2715C1.96095 14.6948 2.30516 15.039 2.72852 15.2548C3.20982 15.5 3.83988 15.5 5.1 15.5Z"
                          stroke="#FAFAFA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <g opacity="0.8">
                        <path
                          d="M12.75 8.75V6.5C12.75 4.42893 11.0711 2.75 9 2.75C6.92893 2.75 5.25 4.42893 5.25 6.5V8.75M5.85 16.25H12.15C13.4101 16.25 14.0402 16.25 14.5215 16.0048C14.9448 15.789 15.289 15.4448 15.5048 15.0215C15.75 14.5402 15.75 13.9101 15.75 12.65V12.35C15.75 11.0899 15.75 10.4598 15.5048 9.97852C15.289 9.55516 14.9448 9.21095 14.5215 8.99524C14.0402 8.75 13.4101 8.75 12.15 8.75H5.85C4.58988 8.75 3.95982 8.75 3.47852 8.99524C3.05516 9.21095 2.71095 9.55516 2.49524 9.97852C2.25 10.4598 2.25 11.0899 2.25 12.35V12.65C2.25 13.9101 2.25 14.5402 2.49524 15.0215C2.71095 15.4448 3.05516 15.789 3.47852 16.0048C3.95982 16.25 4.58988 16.25 5.85 16.25Z"
                          stroke="#FAFAFA"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
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
      <Image>
        <use href={sprite + '#order-food-pana'}></use>
      </Image>
    </Wrapper>
  );
};

export default SharedForm;
