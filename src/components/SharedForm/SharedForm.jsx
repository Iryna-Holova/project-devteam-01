import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { 
  StyledForm,
  WordForm,
  StyledField,
  List,
  SubButton,
  Router,
  Wrapper, 
} from 'components/RegisterPage/RegisterPage.styled';

const SharedForm = ({ initialValues, validationSchema, handleSubmit,router,nameForm,urlRouter,isRegisterForm  }) => {
  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
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
                  {/* <ErrorMessage name="name" component="div"   style={{ visibility: dirty ? 'visible' : 'hidden' }}/> */}
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

          <SubButton type="submit">Sign up</SubButton>
        </StyledForm>
      </Formik>

      <Link to={`/${urlRouter}`}>
        <Router>{router}</Router>
      </Link>
    </Wrapper>
  );
};

export default SharedForm;
