import React, { useState } from 'react';
import {
  FormContainer, Form,
  Input,
  Button,
  ErrorMessage,
} from './SubscribeFormStyles';
import * as yup from 'yup';
import { useFormik } from 'formik';

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});

function SubscribeForm() {
  const [isSubscribed, setSubscribed] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema,
    onSubmit: values => {
      // логика отправки формы и обработки подписки
      setSubscribed(true);
    },
  });

  return (
    <FormContainer>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        )}
        <Button type="submit" disabled={!formik.isValid || formik.isSubmitting}>
          Subscribe
        </Button>
      </Form>
      {isSubscribed && <p>You have subscribed successfully!</p>}
    </FormContainer>
  );
}

export default SubscribeForm;
