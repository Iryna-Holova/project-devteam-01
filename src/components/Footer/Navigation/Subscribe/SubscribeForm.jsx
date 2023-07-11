import React, { useState } from 'react';
import {
  FormContainer,
  Form,
  Input,
  Button,
  ErrorMessage,
  FormTitle,
  FormText,
  SuccessMessage,
} from './SubscribeFormStyles';
import * as yup from 'yup';
import { useFormik } from 'formik';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});

function SubscribeForm() {
  const [isSubscribed, setSubscribed] = useState(false);
  const [inputClicked, setInputClicked] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: values => {
      // логика отправки формы и обработки подписки
      setSubscribed(true);

      // Сброс формы и состояний
      formik.resetForm();
      setInputClicked(false);
    },
  });

  const handleInputChange = event => {
    if (isSubscribed) {
      setSubscribed(false);
    }
    formik.handleChange(event);
  };

  const handleInputClick = () => {
    if (formik.errors.email || isSubscribed) {
      formik.setErrors({});
      setSubscribed(false);
    }
    setInputClicked(true);
  };

  return (
    <FormContainer>
      <Form onSubmit={formik.handleSubmit}>
        <FormTitle>Subscribe to our Newsletter</FormTitle>
        <FormText>
          Subscribe up to our newsletter. Be in touch with latest news and
          special offers, etc.
        </FormText>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={formik.values.email}
          onChange={handleInputChange}
          onBlur={formik.handleBlur}
          onClick={handleInputClick} // Обработчик клика для очистки ошибки или подписки
          style={{
            backgroundColor: 'transparent',
            color: '#FAFAFA',
            paddingLeft: '10px',
          }}
        />
        {isSubscribed && (
          <SuccessMessage>You have subscribed successfully!</SuccessMessage>
        )}
        {inputClicked && formik.touched.email && formik.errors.email && (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        )}
        <Button type="submit" disabled={!formik.isValid || formik.isSubmitting}>
          Subscribe
        </Button>
      </Form>
    </FormContainer>
  );
}

export default SubscribeForm;
