import { useState } from 'react'
import { Button, Col, Row, Form } from 'react-bootstrap'
import {TiPlus, TiMinus} from 'react-icons/ti'
import { OutPutFormat } from './CONSTANT'
const ExportSection = () => {
  const [expand, setExpand] = useState(true)
  return (
    <div className="section">
      <header>
          <span className='fs-4'>Export Section</span>
          {expand ? <TiMinus onClick={()=>setExpand(false)}/> : <TiPlus onClick={()=>setExpand(true)}/>}
      </header>
      {expand && <div className="section__body pt-3 pb-4">
        
        <Row className="justify-content-center g-3">
          
          <Col md={2}>
          <Form.Select aria-label="Default select example" size="lg" name="copy position" >
              <optgroup label="Select Format">
                 {OutPutFormat.map(format => <option value={format.toLowerCase()} key={format}>{format}</option>)}
              </optgroup>
            </Form.Select>
          </Col>
          <Col md={5}>
            <Button variant="primary" size="lg" className='w-100'>Export Image</Button>
          </Col>
        </Row>
      </div>}
    </div>
  )
}

export default ExportSection