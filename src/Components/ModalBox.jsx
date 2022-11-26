import React from 'react'
import { Modal, Button, Row, Col, Form, Nav } from 'react-bootstrap'
const ModalBox = ({ showModal, handleCloseModal }) => {
  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Setting</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* -------- General Setting ---------------------------------- */}
        <h2 className='fs-5 mb-3'>General Settings</h2>
        <Row className='align-items-start'>
          <Col xs={6} className="d-flex align-items-center">
            <Form.Label htmlFor="CanvasColor" className='me-2'>Canvas BG</Form.Label>
            <Form.Control
              type="color"
              id="CanvasColor"
              defaultValue="#000000"
              title="Canvas BG"
              size='sm'
            />
          </Col>

          <Col xs={6}>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Floating Preview"
            />
          </Col>
        </Row>
        

        {/* -------- Notification Setting ---------------------------------- */}
        <hr className='mt-3 mb-3'/>
        <h2 className='fs-5 mb-3'><span>Notification Settings</span></h2>
        <Row>
          <Col>
              <div>No Saved Custom CTA</div>
          </Col>
        </Row>


        {/* -------- Banners Setting ---------------------------------- */}
        <hr className='mt-3 mb-3'/>
        <h2 className='fs-5 mb-3'><span>Banner Settings</span></h2>
        <Row>
          <Col>
              <div>No Saved Custom CTA</div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCloseModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalBox