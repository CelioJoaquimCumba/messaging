import React from 'react';
import {Container, Image, Navbar, Stack } from 'react-bootstrap';
import "./Navbar.css";
import logo from '../../resources/Messaging.png'
export const NavbarComponent = ():JSX.Element => {
    return (
    <Navbar   expand="lg" className="navbar" sticky='top'>
      <Container>
        <Navbar.Brand href="#home">
          <Image fluid src={logo} alt="logo" width="40px"/>
          Messaging
          </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Stack direction='horizontal' gap={2}>
              <Navbar.Text>
                <a href="#login">Sign In</a>
              </Navbar.Text>
              <Navbar.Text>
                <a href="#register">Register</a>
              </Navbar.Text>
            </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
