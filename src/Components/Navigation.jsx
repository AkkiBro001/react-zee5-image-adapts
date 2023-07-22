import React, {useState} from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import { AiFillSetting } from 'react-icons/ai'
import ModalBox from './ModalBox';

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
 
  
  
  
  return (
    <Navbar bg="primary" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="/react-zee5-image-adapts" className='ms-2'><strong className='fs-4'>ZEE5 Image Adapts</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto fs-5">
          <NavLink to="/react-zee5-image-adapts/notification" className=
            {({ isActive }) =>
              isActive ? 'text-light me-4 me-2 ms-md-2 text-decoration-none' : 'text-white-50 me-4 ms-md-2 text-decoration-none'
            }
          >Notification</NavLink>
          <NavLink to="/react-zee5-image-adapts/banner" className=
            {({ isActive }) =>
              isActive ? 'text-light text-decoration-none' : 'text-white-50 text-decoration-none'
            }
          >Banner</NavLink>
        </Nav>
        <Nav>
          <Nav.Link>
          <Button variant="outline-light" className='fs-5 d-flex align-items-center' onClick={handleShowModal}>
          <AiFillSetting className='lh-base me-2'/> 
          <span>Setting</span>
          </Button>
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
      <ModalBox showModal={showModal} handleCloseModal={handleCloseModal}/>
      </Container>

    </Navbar>
  )
}

export default Navigation