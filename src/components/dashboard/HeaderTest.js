import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

export default function HeaderTest() {
  return (
    <div>
        <Navbar className="bg-body-tertiary upper-header">
        <Container>
          <Navbar.Brand href="#home" style={{color: 'white'}}>Brand link</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{color: 'white'}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{color: 'white'}}>Link</Nav.Link>
            </Nav>
        </Navbar.Collapse>

        </Container>
      </Navbar>
    </div>
  )
}
