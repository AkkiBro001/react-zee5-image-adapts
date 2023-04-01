import React, { useRef, useState } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'
import ToolTip from './ToolTip'
import { AiFillInfoCircle } from 'react-icons/ai';
import { FaLink } from 'react-icons/fa';
import LoacalSaveData from './LocalSaveData';
import { useLocalStorage } from '../Hooks';
import AlertBox from './AlertBox';


const ModalBox = ({ showModal, handleCloseModal }) => {
  const [sizeEdit, setSizeEdit] = useState({isSizeEdit: false, isSizeDelete: false, activeValue: ''})
  const [showAlert, setShowAlert] = useState({ status: false, type: 'danger', msg: 'error', title: '' })
  const [generalSetting, setGeneralSetting] = useLocalStorage("GenralSetting")
  

 

  //!Element Ref
  const floatingRef = useRef(null)
  

  let SavedSizeOBJ = JSON.parse(localStorage.getItem('CustomSize'))
  if (SavedSizeOBJ) {
    SavedSizeOBJ = SavedSizeOBJ.map(sizes => {
      const size = sizes.split('x')
      return { w: size[0], h: size[1] }
    })
  }else{
    SavedSizeOBJ = []
  }



  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header>
        <Modal.Title>Setting</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {showAlert.status && <AlertBox alertDisplay={true} alertType={showAlert.type} alerMsg={showAlert.msg} alertTitle={showAlert.title} handleClose={setShowAlert} />}
        {/* -------- General Setting ---------------------------------- */}
        <h2 className='fs-5 mb-3'>General Settings</h2>
        <Row className='align-items-start g-2 align-items-center'>
          <Col xs={12} sm={4} className="d-flex align-items-center">
            <Form.Label htmlFor="CanvasColor" className='me-2'>Canvas BG</Form.Label>
            <Form.Control
              type="color"
              id="CanvasColor"
              defaultValue={generalSetting.bgColor}
              title="Canvas BG"
              size='sm'
              onChange={(e) => setGeneralSetting(preVal => ({ ...preVal, bgColor: e.target.value }))}
            />
          </Col>

          <Col xs={12} sm={5} className="d-flex align-items-center justify-content-sm-center">
            <Form.Check
              type="switch"
              id="floting-switch"
              label="Floating Preview"
              checked={generalSetting.isFloating}
              onChange={(e) => setGeneralSetting(preVal => ({ ...preVal, isFloating: !preVal.isFloating }))}
              ref={floatingRef}
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
        {SavedSizeOBJ.length ? <>
          <LoacalSaveData type="notification" subType="size" data={SavedSizeOBJ} getValue={setSizeEdit}/>
          { 
            
            sizeEdit.isSizeEdit && <Row>
            
            <Col xs={4} md={5}>
              <Form.Group className="mb-3">
                <Form.Control type="number" placeholder="Width" defaultValue={sizeEdit.activeValue.split('x')[0]}/>
              </Form.Group>
            </Col>
            <Col xs={4} md={5}>
              <Form.Group className="mb-3">
                <Form.Control type="number" placeholder="Height" defaultValue={sizeEdit.activeValue.split('x')[1]}/>
              </Form.Group>
            </Col>
            <Col xs={4} md={2}>
              <Button variant="primary" className='w-100'>Save</Button>
            </Col>
          </Row>}
        </> : <Row>
          <Col>
            <div>No Saved Custom Size</div>
          </Col>
        </Row>}


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

              <Col xs={6} className="mt-0">
                <Form.Label className='fs-6'><strong>X-Axis</strong></Form.Label>
                <Form.Control type="number" size="sm" className='p-1 text-center fs-6' />
              </Col>
              <Col xs={6} className="mt-0">
                <Form.Label className='fs-6'><strong>Y-Axis</strong></Form.Label>
                <Form.Control type="number" size="sm" className='p-1 text-center fs-6' />
              </Col>
              <Col xs={6} className="position-relative mt-0">
                <FaLink className="position-absolute fs-6 widthLinkCTA text-muted" />
                <Form.Label className='fs-6'><strong>Width</strong></Form.Label>
                <Form.Control type="number" size="sm" className='p-1 text-center fs-6' />
              </Col>
              <Col xs={6} className="mt-0">
                <Form.Label className='fs-6'><strong>Height</strong></Form.Label>
                <Form.Control type="number" size="sm" className='p-1 text-center fs-6' />
              </Col>
              <Col xs={12} className="mt-0">
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
        <Button variant="secondary" name="close_modal">
          Close
        </Button>
        <Button variant="primary" name="save_modal">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalBox