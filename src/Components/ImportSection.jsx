import { useRef, useState } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { TiPlus, TiMinus } from 'react-icons/ti'
import { AiOutlineClose } from 'react-icons/ai'
import { Notification_Type } from './CONSTANT'
import { useHandleInput } from '../Hooks'
import AlertBox from './AlertBox'
const ImportSection = () => {
  const [expand, setExpand] = useState(true)
  const [input, setInput] = useHandleInput({name: '', value: '', showAlert: false, msg: null, alertType: 'danger'})
  const notiTypeRef = useRef(null)

  const isCustomNotiTypeActive = !notiTypeRef.current?.value ? false : notiTypeRef.current?.value === 'custom' ? true : false;
  
  return (
    <div className="section">
      <header>
        <span className='fs-4'>Image Import Section</span>
        {expand ? <TiMinus onClick={() => setExpand(false)} /> : <TiPlus onClick={() => setExpand(true)} />}
      </header>
      {expand && <div className="section__body">
      <AlertBox stat={true} msg={"Wrong Input"}/>
        <Row className="mb-3">
          <Col md={8}>
            <Form.Group controlId="formFileLg" className="mb-3 mb-md-0">
              <Form.Control type="file" size="lg" />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Select aria-label="Default select example" size="lg" ref={notiTypeRef} 
            onChange={(e)=>setInput(e)}>
              <optgroup label="Notification Type">
                {
                  Notification_Type.map(type => <option value={type.toLowerCase()} key={type}>{type}</option>)
                }
              </optgroup>
            </Form.Select>
          </Col>
        </Row>



       {isCustomNotiTypeActive && <Row className="mb-3 align-items-center justify-content-center">
          <Col xs={9} sm={7} md={5}>
            <Row className='align-items-center'>
              <Col xs={5}>
                <Form.Control size="md" type="number" placeholder="Width" 
                onChange={(e) => setInput(e)}
                defaultValue="1024"
                />
              </Col>
              
              <Col className='text-secondary d-flex justify-content-center' xs={2}>
                <AiOutlineClose />
              </Col>

              <Col xs={5}>
                <Form.Control size="md" type="number" placeholder="Height"/>
              </Col>
            </Row>
          </Col>


          <Col xs={3} sm={3} md={3}>
            <Button variant="primary" size="md" className='w-100'>Save <span className='d-sm-inline d-none'>Size</span></Button>
          </Col>
        </Row>}




        <Row className="justify-content-center">
          <Col sm={5} md={4} className="d-flex justify-content-center">
            <Button variant="primary" size="lg" className='w-100'>Preview Image</Button>
          </Col>
        </Row>
      </div>}
    </div>
  )
}

export default ImportSection