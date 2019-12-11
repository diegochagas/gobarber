import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Fullname" />

        <Input name="email" type="email" placeholder="Your email address" />

        <hr />

        <Input
          type="password"
          name="oldPassword"
          placeholder="Your actual password"
        />

        <Input type="password" name="password" placeholder="Your password" />

        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
        />

        <button type="submit">Update profile</button>
      </Form>

      <button type="button">Logout GoBarber</button>
    </Container>
  );
}
