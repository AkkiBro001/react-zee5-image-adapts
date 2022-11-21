import { useState } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { TiPlus, TiMinus } from 'react-icons/ti'
const ImportSection = () => {
  const [expand, setExpand] = useState(true)
  return (
    <div className="section">
      <header>
        <span className='fs-4'>Image Import Section</span>
        {expand ? <TiMinus onClick={() => setExpand(false)} /> : <TiPlus onClick={() => setExpand(true)} />}
      </header>
      {expand && <div className="section__body">
        <Row className="mb-3">
          <Col sm={8}>
            <Form.Group controlId="formFileLg" className="mb-3 mb-sm-0">
              <Form.Control type="file" size="lg" />
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Form.Select aria-label="Default select example" size="lg">
            <optgroup label="Notification Type">
              <option value="daily">Normal (1024x512)</option>
              <option value="2">3in1 (640x320)</option>
              <option value="3">ZB (800x600)</option>
              <option value="3">Mug (72x72)</option>
            </optgroup>
            </Form.Select>
          </Col>
        </Row>
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