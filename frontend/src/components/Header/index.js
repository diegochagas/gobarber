import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Logo"/>

          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Diego Chagas</strong>

              <Link to="/profile">My profile</Link>
            </div>

            <img src="https://api.adorable.io/avatars/51/abott@adorable.png" alt="Avatar"/>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
