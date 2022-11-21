import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { AiFillSetting } from 'react-icons/ai'
const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/"><strong className='fs-3'>ZEE5 Image Adapts</strong></Navbar.Brand>
        <Nav className="me-auto fs-5">
          <NavLink to="/" className=
            {({ isActive }) =>
              isActive ? 'text-light me-4 me-2 ms-2 text-decoration-none' : 'text-white-50 me-4 ms-2 text-decoration-none'
            }
          >Notification</NavLink>
          <NavLink to="./banner" className=
            {({ isActive }) =>
              isActive ? 'text-light text-decoration-none' : 'text-white-50 text-decoration-none'
            }
          >Banner</NavLink>
        </Nav>
        <Nav>
          <Nav.Link className='fs-2'>
            <AiFillSetting />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation