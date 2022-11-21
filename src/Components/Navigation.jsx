import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/"><strong>ZEE5 Image Adapts</strong></Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className=
            {({ isActive }) =>
              isActive ? 'text-light text-decoration-underline me-4 ms-2' : 'text-light text-decoration-none me-4 ms-2'
            }
            >Notification</NavLink>
            <NavLink to="./banner" className=
            {({ isActive }) =>
              isActive ? 'text-light text-decoration-underline' : 'text-light text-decoration-none'
            }
            >Banner</NavLink>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navigation