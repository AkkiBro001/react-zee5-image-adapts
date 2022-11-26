import React from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'
import ToolTip from './ToolTip'
import { AiFillInfoCircle } from 'react-icons/ai';
import LoacalSaveData from './LocalSaveData';


const ModalBox = ({ showModal, handleCloseModal }) => {

  

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Setting</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* -------- General Setting ---------------------------------- */}
        <h2 className='fs-5 mb-3'>General Settings</h2>
        <Row className='align-items-start g-2 align-items-center'>
          <Col xs={12} sm={4} className="d-flex align-items-center">
            <Form.Label htmlFor="CanvasColor" className='me-2'>Canvas BG</Form.Label>
            <Form.Control
              type="color"
              id="CanvasColor"
              defaultValue="#000000"
              title="Canvas BG"
              size='sm'
            />
          </Col>

          <Col xs={12} sm={5} className="d-flex align-items-center justify-content-sm-center">
            <Form.Check
              type="switch"
              id="floting-switch"
              label="Floating Preview"
            />

            <ToolTip tip="Float preview screen while scrolling">
              <Form.Label className='toolTip'>
                <AiFillInfoCircle />
              </Form.Label>
            </ToolTip>
          </Col>

          <Col xs={12} sm={3} className="d-flex align-items-center justify-content-sm-end">
            <Form.Check
              type="switch"
              id="guide-switch"
              label="Guides"
            />

            <ToolTip tip="Enable/disable guidelines">
              <Form.Label className='toolTip'>
                <AiFillInfoCircle />
              </Form.Label>
            </ToolTip>
          </Col>

          <Col xs={12} sm={12} className="d-flex align-items-center justify-content-sm-center">
            <Button variant="primary">
              Reset All
            </Button>
            <ToolTip tip="Delete all saved template and restore default">
              <Form.Label className='toolTip'>
                <AiFillInfoCircle />
              </Form.Label>
            </ToolTip>
          </Col>
        </Row>


        {/* -------- Notification Setting ---------------------------------- */}
        <hr className='mt-3 mb-3' />
        <h2 className='fs-5 mb-3'><span>Notification Settings</span></h2>
        
        <LoacalSaveData type="notification" subType="size" data={[{w:250, h:350}]}/>
        <LoacalSaveData type="notification" subType="cta" data={[{name:"play now"}, {name:"what is this"}]}/>

        {/* -------- Banners Setting ---------------------------------- */}
        <hr className='mt-3 mb-3' />
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