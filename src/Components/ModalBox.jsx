import React from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'
import ToolTip from './ToolTip'
import { AiFillInfoCircle } from 'react-icons/ai';
import { FaLink } from 'react-icons/fa';
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

        <LoacalSaveData type="notification" subType="size" data={[{ w: 250, h: 350 }]} />
        <Row>
          <Col xs={4} md={5}>
            <Form.Group className="mb-3">
              <Form.Control type="number" placeholder="Width" />
            </Form.Group>
          </Col>
          <Col xs={4} md={5}>
            <Form.Group className="mb-3">
              <Form.Control type="number" placeholder="Height" />
            </Form.Group>
          </Col>
          <Col xs={4} md={2}>
            <Button variant="primary" className='w-100'>Save</Button>
          </Col>
        </Row>



        <LoacalSaveData type="notification" subType="cta" data={[{ name: "play now" }, { name: "what is this" }]} />
        <Row className='mt-2 align-items-xl-start'>
              {/* CTA Name */}
              
            <Col xs={12}>
              <Form.Label className='fs-5 mt-0'><strong>CTA Name</strong></Form.Label>
              <Form.Control size="md" type="text" placeholder="Text Here..." />
            </Col>

            {/* x, y, Width, Height, Radius of CTA */}
            <Col xs={7} className="mt-lg-2">
              <Row className={`mt-lg-0 mt-1 g-2 text-dark justify-content-center`}>

                <Col xs={6 } className="mt-0">
                  <Form.Label className='fs-6'><strong>X-Axis</strong></Form.Label>
                  <Form.Control type="number" size="sm" className='p-1 text-center fs-6' />
                </Col>
                <Col xs={6 } className="mt-0">
                  <Form.Label className='fs-6'><strong>Y-Axis</strong></Form.Label>
                  <Form.Control type="number" size="sm" className='p-1 text-center fs-6' />
                </Col>
                <Col xs={6 } className="position-relative mt-0">
                  <FaLink className="position-absolute fs-6 widthLinkCTA text-muted" />
                  <Form.Label className='fs-6'><strong>Width</strong></Form.Label>
                  <Form.Control type="number" size="sm" className='p-1 text-center fs-6' />
                </Col>
                <Col xs={6 } className="mt-0">
                  <Form.Label className='fs-6'><strong>Height</strong></Form.Label>
                  <Form.Control type="number" size="sm" className='p-1 text-center fs-6' />
                </Col>
                <Col xs={12}  className="mt-0">
                  <Form.Label className='fs-6'><strong><span>Border</span> Radius</strong></Form.Label>
                  <Form.Control type="number" size="sm" className='p-1 text-center fs-6' />
                </Col>

              </Row>
            </Col>

            {/* BG Color, Play Button, Save Button */}
            <Col className='d-flex mt-lg-2 mt-1' xs={5} lg={4}>
              <Row className='g-2 w-100'>
                <Col sm={12} className="d-flex justify-content-end flex-column">
                  <Form.Label htmlFor="exampleColorInput" className='fs-6 mt-0'><strong>BG Color</strong></Form.Label>
                  <Form.Control
                    type="color"
                    id="exampleColorInput"
                    defaultValue="#563d7c"
                    title="Choose your color"
                    size="md"
                  />
                </Col>

                <Col sm={12} className="d-flex justify-content-end flex-column">
                  <Form.Label className='fs-6 mt-0'><strong>Play Button</strong></Form.Label>
                  <Form.Select aria-label="Default select example" size="md">

                    <option value="no">No</option>
                    <option value="yes">Yes</option>

                  </Form.Select>
                </Col>

                <Col sm={12} className="d-flex align-items-end">
                  <Button variant="primary" size="md">Save CTA</Button>
                </Col>
              </Row>
            </Col>

          </Row>

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