import { useEffect, useRef, useState } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { TiPlus, TiMinus } from 'react-icons/ti'
import { AiOutlineClose } from 'react-icons/ai'
import AlertBox from './AlertBox'
import { useDispatch, useSelector } from 'react-redux'
import { customNotiSizeUpdate, setDefaultNotiSize } from '../app/SettingSlice/NotificationSlice'
import { DEFAULT_NOTI_SIZES } from "../app/SettingSlice/NotificationSlice"



const ImportSection = () => {
  const [expand, setExpand] = useState(true)
  const notiTypeRef = useRef(null)
  const fileRef = useRef(null)
  const customCTAWidthRef = useRef(null)
  const customCTAHeightRef = useRef(null)


  const Notification = useSelector(state => state.notification);
  const [notiSize, setNotiSize] = useState(Notification.defaultNotiSize.name)
  const dispatch = useDispatch()

  const [showAlert, setShowAlert] = useState({
    showAlert: false,
    alertType: "danger",
    alertTitle: "",
    alertMsg: "",

  })

  useEffect(() => {
    localStorage.setItem('notiCustomSizes', JSON.stringify(Notification.customNotiSize))
  }, [Notification.customNotiSize])


  const validationCustomSize = () => {
    const width = customCTAWidthRef.current.value;
    const height = customCTAHeightRef.current.value;
    const name = `${width}x${height}`;
    const { customNotiSize } = Notification;
    const sizeExist = customNotiSize.find(size => size.name === name);
    const defaultExitSizes = DEFAULT_NOTI_SIZES.find(size => size.name.match(/(\d+x\d+)/) && size.name.match(/(\d+x\d+)/)[0] === name);
    if (!width || !height) {
      setShowAlert({
        showAlert: true,
        alertType: "danger",
        alertTitle: "Size Error",
        alertMsg: "Please enter values in numbers",
      })
    }
    else if (isNaN(width) || isNaN(height)) {
      setShowAlert({
        showAlert: true,
        alertType: "danger",
        alertTitle: "Size Error",
        alertMsg: "value must be numbers",
      })
    }
    else if (Number(width) < 30 || Number(height) < 30 || Number(width) > 1920 || Number(height) > 1920) {
      console.log(Number(width) < 30 || Number(height) < 30)
      setShowAlert({
        showAlert: true,
        alertType: "danger",
        alertTitle: "Size Error",
        alertMsg: `Min size must be greater then 30 & Max size must be less than 1920`,
      })
    }
    else if (sizeExist || defaultExitSizes) {
      setShowAlert({
        showAlert: true,
        alertType: "danger",
        alertTitle: "Size Error",
        alertMsg: `${name} is already exist`,
      })
    } else {

      dispatch(customNotiSizeUpdate({ w: parseInt(width), h: parseInt(height), res: 72, name }))

      setShowAlert({
        showAlert: true,
        alertType: "success",
        alertTitle: "Size Saved",
        alertMsg: `${name} is saved successfully`,
      })

      customCTAWidthRef.current.value = "";
      customCTAHeightRef.current.value = "";
    }
  }

  const imageValidation = () => {
    
    const BrowseFiles = fileRef.current;

    if (!BrowseFiles || BrowseFiles.files.length === 0) {
      setShowAlert({
        showAlert: true,
        alertType: "danger",
        alertTitle: "Image Error",
        alertMsg: "No image imported",

      })
    }else if(Notification.defaultNotiSize.name === "3in1 (640x320)" && BrowseFiles.files.length !== 3){
      setShowAlert({
        showAlert: true,
        alertType: "danger",
        alertTitle: "Image Error",
        alertMsg: "For 3in1 (640x320), It's should be 3 images",

      })
    }else if(BrowseFiles.files.length > 4){
      setShowAlert({
        showAlert: true,
        alertType: "danger",
        alertTitle: "Image Error",
        alertMsg: "Max 4 image needed",

      })
    }else{
        
    }
  }

  return (
    <div className="section">
      <header>
        <span className='fs-4'>Image Import Section</span>
        {expand ? <TiMinus onClick={() => setExpand(false)} /> : <TiPlus onClick={() => setExpand(true)} />}
      </header>
      {expand && <div className="section__body">
        <AlertBox {...showAlert} setAlert={setShowAlert} />

        <Row className="mb-3">
          <Col md={8}>
            <Form.Group controlId="formFileLg" className="mb-3 mb-md-0">
              <Form.Control type="file" size="lg" accept=".jpg, .jpeg, .png, .webp" multiple ref={fileRef}

              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Select aria-label="Default select example" size="lg" ref={notiTypeRef}
              value={notiSize}
              onChange={(e) => {
                setNotiSize(e.target.value);
                if (e.target.value === "Custom") return
                dispatch(setDefaultNotiSize(e.target.value))
              }
              }
            >
              {/* <optgroup label="Notification Type"> */}
              {Notification.notiSize.map((size, index) => <option key={index} value={size.name}>{size.name}</option>)}
              {/* </optgroup> */}
            </Form.Select>
          </Col>
        </Row>



        {notiSize === 'Custom' && <Row className="mb-3 align-items-center justify-content-center">
          <Col xs={9} sm={7} md={5}>
            <Row className='align-items-center'>
              <Col xs={5}>
                <Form.Control size="md" type="number" placeholder="Width"
                  ref={customCTAWidthRef}
                  defaultValue=""
                />
              </Col>

              <Col className='text-secondary d-flex justify-content-center' xs={2}>
                <AiOutlineClose />
              </Col>

              <Col xs={5}>
                <Form.Control size="md" type="number" placeholder="Height"
                  ref={customCTAHeightRef}
                  defaultValue=""
                />
              </Col>
            </Row>
          </Col>


          <Col xs={3} sm={3} md={3}>
            <Button variant="primary" size="md" className='w-100'
              onClick={() => validationCustomSize()}
            >Save <span className='d-sm-inline d-none'>Size</span></Button>

          </Col>
        </Row>}




        <Row className="justify-content-center">
          <Col sm={5} md={4} className="d-flex justify-content-center">
            <Button variant="primary" size="lg" className='w-100'
              onClick={imageValidation}
              disabled={notiTypeRef.current?.value.toUpperCase() === "CUSTOM" ? true : false}
            >Preview Image</Button>
          </Col>
        </Row>
      </div>}
    </div>
  )
}

export default ImportSection