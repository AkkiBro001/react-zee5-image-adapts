import React, { useEffect, useRef, useState} from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'
import ToolTip from './ToolTip'
import { AiFillInfoCircle, AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { FaLink } from 'react-icons/fa';

import AlertBox from './AlertBox'
import { useDispatch, useSelector } from 'react-redux';
import { updateSetting } from '../app/SettingSlice/SettingSlice';
import { DEFAULT_NOTI_SIZES, deleteCustomNotiSize, editCustomNotiSize } from '../app/SettingSlice/NotificationSlice';

const ModalBox = ({ showModal, handleCloseModal }) => {

const Setting = useSelector(state => state.setting)
const Notification = useSelector(state => state.notification)

const dispatch = useDispatch()

const [showAlert, setShowAlert] = useState({
  showAlert: false, 
  alertType: "danger", 
  alertTitle: "", 
  alertMsg: "", 
  
})

//!Element Ref
const floatingRef = useRef(null)
const guideRef = useRef(null)
const bgRef = useRef(null)
const customSizeHeightRef = useRef(null)
const customSizeWidthRef = useRef(null)
const Saved_Noti_Size_Ref = useRef(null)

  const [showCustomSizeEdit, setShowCustomeSizeEdit] = useState(false)

  useEffect(()=>{
    localStorage.setItem('setting', JSON.stringify(Setting))
  },[Setting, Notification])
  
  const validationCustomSize = () => {
    const width = customSizeWidthRef.current.value;
    const height = customSizeHeightRef.current.value;
    const name = `${width}x${height}`;
    const {customNotiSize} = Notification;
    const sizeExist = customNotiSize.find(size => size.name === name);
    const defaultExitSizes = DEFAULT_NOTI_SIZES.find(size => size.name.match(/(\d+x\d+)/) && size.name.match(/(\d+x\d+)/)[0] === name);
     if(!width || !height){
      setShowAlert({
        showAlert: true, 
        alertType: "danger", 
        alertTitle: "Size Error", 
        alertMsg: "Please enter values in numbers", 
      })
    }
    else if(isNaN(width) || isNaN(height)){
      setShowAlert({
        showAlert: true, 
        alertType: "danger", 
        alertTitle: "Size Error", 
        alertMsg: "value must be numbers", 
      })
    }
    else if(Number(width) < 30 || Number(height) < 30 || Number(width) > 1920 || Number(height) > 1920){
      console.log(Number(width) < 30 || Number(height) < 30)
      setShowAlert({
        showAlert: true, 
        alertType: "danger", 
        alertTitle: "Size Error", 
        alertMsg: `Min size must be greater then 30 & Max size must be less than 1920`, 
      })
    }
    else if(sizeExist || defaultExitSizes){
      setShowAlert({
        showAlert: true, 
        alertType: "danger", 
        alertTitle: "Size Error", 
        alertMsg: `${name} is already exist`, 
      })
    }else{

      dispatch( editCustomNotiSize({targetName: Saved_Noti_Size_Ref.current.value, newValue: {w: parseInt(width), h: parseInt(height), res: 72, name}}))
      
      setShowAlert({
        showAlert: true, 
        alertType: "success", 
        alertTitle: "Size Updated", 
        alertMsg: `${name} is updataed successfully`, 
      })

      setShowCustomeSizeEdit(false)
    }
}


  


  return (
    <Modal show={showModal} onHide={handleCloseModal} backdrop="static">
      <Modal.Header>
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
              title="Canvas BG"
              size='sm'
              defaultValue= {Setting.generalSetting.bg}
              ref={bgRef}
            />
          </Col>

          <Col xs={12} sm={5} className="d-flex align-items-center justify-content-sm-center">
            <Form.Check
              type="switch"
              id="floting-switch"
              label="Floating Preview"
              ref={floatingRef}
              defaultChecked={Setting.generalSetting.isFloating}
              
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
              defaultChecked={Setting.generalSetting.isGuideOn}
              ref={guideRef}
             />

            <ToolTip tip="Enable/disable guidelines">
              <Form.Label className='toolTip'>
                <AiFillInfoCircle />
              </Form.Label>
            </ToolTip>
          </Col>

          <Col xs={12} sm={12} className="d-flex align-items-center justify-content-sm-center">
            <Button variant="primary"
              
            >
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
        <AlertBox {...showAlert} setAlert={setShowAlert}/>
        {/* ----------- Saved Custom Size CTA ---------- */}
            {
            Notification.customNotiSize.length ?
            <>
            <Row className='align-items-end mb-3'>
              <Col xs={6} sm={8}>
                <Form.Label className='fs-6'>
                  <strong>Saved Size</strong>
                </Form.Label>
                <Form.Select aria-label="Default select example" className='w-100'
                name="Saved_Noti_Size"
                ref={Saved_Noti_Size_Ref}
                >
                  { 
                  
                  
                  Notification.customNotiSize.map(size => <option key={size.name} value={size.name}>{size.name}</option>)
                    
                  }
                </Form.Select>
              </Col>

              <Col xs={3} sm={2}>
                <Button variant="primary" className='w-100 fs-5' size="sm"
                onClick={()=> setShowCustomeSizeEdit(pre => !pre)}
                >
                  <AiFillEdit />
                </Button>
              </Col>

              <Col xs={3} sm={2}>
                <Button variant="danger" className='w-100 fs-5' size="sm"
                onClick={()=> {
                  dispatch(deleteCustomNotiSize(Saved_Noti_Size_Ref.current.value));
                  setShowAlert({
                    showAlert: true, 
                    alertType: "success", 
                    alertTitle: "Size deleted !!", 
                    alertMsg: `${Saved_Noti_Size_Ref.current.value} deleted successfully`, 
                  })
                }}
                >
                  <AiFillDelete />
                </Button>
              </Col>
            </Row>

            
            {showCustomSizeEdit && <Row>
              <Col xs={4} md={5}>
                <Form.Group className="mb-3">
                  <Form.Control type="number" placeholder="Width" ref={customSizeWidthRef} defaultValue={`${Saved_Noti_Size_Ref.current?.value.split('x')[0]}`}/>
                </Form.Group>
              </Col>
              <Col xs={4} md={5}>
                <Form.Group className="mb-3">
                  <Form.Control type="number" placeholder="Height" ref={customSizeHeightRef} defaultValue={`${Saved_Noti_Size_Ref.current?.value.split('x')[1]}`}/>
                </Form.Group>
              </Col>
              <Col xs={4} md={2}>
                <Button variant="primary" className='w-100'
                onClick={()=> validationCustomSize()}
                >Save
                </Button>
              </Col>
            </Row>}
            </>
            :

            <Row>
              <Col>
                <div>No Saved Custom Size</div>
              </Col>
            </Row>}
        
        <hr />
         {/* ----------- Saved Custom CTA ---------- */} 
         {Notification.customNotiCTA.length ? <>
         <Row className='align-items-end mb-3'>
              <Col xs={6} sm={8}>
                <Form.Label className='fs-6'>
                  <strong>Saved CTA</strong>
                </Form.Label>
                <Form.Select aria-label="Default select example" className='w-100'
                name="Saved_Noti_Size"
                
                >
                  <option value="" >test</option>
                </Form.Select>
              </Col>

              <Col xs={3} sm={2}>
                <Button variant="primary" className='w-100 fs-5' size="sm">
                  <AiFillEdit />
                </Button>
              </Col>

              <Col xs={3} sm={2}>
                <Button variant="danger" className='w-100 fs-5' size="sm">
                  <AiFillDelete />
                </Button>
              </Col>
            </Row>
        <Row className='mt-2 align-items-xl-start'>
          
          
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
        </>
        :
        <Row>
              <Col>
                <div>No Saved Custom CTA</div>
              </Col>
        </Row>}
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
        <Button variant="secondary" name="close_modal"
          onClick={()=>handleCloseModal()}
        >
          Close
        </Button>
        <Button variant="primary" name="save_modal"
          onClick={()=>{
            dispatch(updateSetting(bgRef.current.value, floatingRef.current.checked, guideRef.current.checked));
            handleCloseModal()
            
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalBox