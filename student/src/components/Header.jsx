import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <Navbar className="bg-warning">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-users" />{' '}
            Student management
          </Navbar.Brand>
        </Container>
      </Navbar></>
  )
}

export default Header