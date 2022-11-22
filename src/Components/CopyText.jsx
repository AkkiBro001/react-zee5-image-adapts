import { useState } from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import { TiPlus, TiMinus } from 'react-icons/ti'
import { COPYTEXT, Channels } from './CONSTANT'
import ApplyGradient from './ApplyGradient'

const CopyText = () => {
  const [expand, setExpand] = useState(true)
  return (
    <div className="section">
      <header>
          <span className='fs-4'>Copy Section</span>
          {expand ? <TiMinus onClick={()=>setExpand(false)}/> : <TiPlus onClick={()=>setExpand(true)}/>}
      </header>
      {expand && <div className="section__body">
        <Row>
          <Col sm={12} md={4} className="mb-md-0 mb-3">
            <Form.Label className='fs-5'><strong>COPY</strong></Form.Label>
            <Form.Select aria-label="Default select example" size="lg">
              <optgroup label="Select CTA Button">
                {COPYTEXT.map(copy => {
                 return <option value={copy} key={copy}>{copy}</option>
                })}
              </optgroup>
            </Form.Select>
          </Col>

          <Col sm={12} md={4} className="mb-md-0 mb-3">
            <Form.Label className='fs-5'><strong>Custom Text</strong></Form.Label>
            <Form.Control size="lg" type="text" placeholder="Text Here..." />
          </Col>

          <Col sm={12} md={4}>
          
              <ApplyGradient tip="Apply Gradient to behind the Copy Text" type="copy"/>
            
          </Col>
        </Row>
      </div>}
    </div>
  )
}

export default CopyText