import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

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
