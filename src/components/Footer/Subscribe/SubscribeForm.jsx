import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

import {
  Form,
  Input,
  Button,
  ErrorMessage,
  FormTitle,
  FormText,
  SuccessMessage,
} from './SubscribeForm.styled';

import sprite from '../../../assets/sprite.svg';
import { subscribe } from 'services/api/subscribe';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Please enter your email'),
});

const SubscribeForm = () => {
  const [isSubscribed, setSubscribed] = useState(false);
  const [inputClicked, setInputClicked] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: async values => {
      const response = await subscribe(values);
      switch (response.status) {
        case 400:
          console.log(response.data.error);
          break;
        case 401:
          console.log(response.data.error);
          break;
        case 500:
          console.log(response.data.error);
          break;
        case 200:
          setSubscribed(true);
          formik.resetForm();
          setInputClicked(false);
          break;
        default:
          console.log('unknown promlem');
          return;
      }
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
    <Form onSubmit={formik.handleSubmit}>
      <FormTitle>Subscribe to our Newsletter</FormTitle>
      <FormText>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
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
      />
      <svg>
        <use href={sprite + '#email'}></use>
      </svg>
      {isSubscribed && <SuccessMessage>You are subscribed!</SuccessMessage>}
      {inputClicked && formik.touched.email && formik.errors.email && (
        <ErrorMessage>{formik.errors.email}</ErrorMessage>
      )}
      <Button type="submit" disabled={!formik.isValid || formik.isSubmitting}>
        Subscribe
      </Button>
    </Form>
  );
};

export default SubscribeForm;
