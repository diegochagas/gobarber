import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'At least 6 characters').required('Password is required')
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="GoBarber logo" />

      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="name" type="text" placeholder="Fullname" />

        <Input name="email" type="email" placeholder="Your email" />

        <Input name="password" type="password" placeholder="Your secret password" />

        <button type="submit">Create account</button>

        <Link to="/">Already have an account</Link>
      </Form>
    </>
  );
}
