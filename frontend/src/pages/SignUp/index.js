import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber logo" />

      <form>
        <input type="text" placeholder="Fullname" />

        <input type="email" placeholder="Your email" />

        <input type="text" placeholder="Your secret password" />

        <button type="submit">Create account</button>

        <Link to="/">Already have an account</Link>
      </form>
    </>
  );
}
