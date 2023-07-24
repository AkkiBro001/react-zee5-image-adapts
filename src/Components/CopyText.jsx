import { useRef, useState } from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import { TiPlus, TiMinus } from 'react-icons/ti'
import { COPYTEXT, DefaultCopyPosition } from './CONSTANT'
import ApplyGradient from './ApplyGradient';




const CopyText = () => {
  const [expand, setExpand] = useState(true)
  const copyRef = useRef(null)
  const customCopyPositionRef = useRef(null)

  const [inputs, setInputs] = useState({
      copy: COPYTEXT[0],
      customCopyPOS: DefaultCopyPosition[0],
  })

  const isCustomCopyActive = inputs.copy === COPYTEXT[COPYTEXT.length-1] ? true : false;
  const isNoCopyActive = inputs.copy === COPYTEXT[0] ? true : false;
  const isCustomCopyPostionActive = inputs.customCopyPOS === "Custom" ? true : false;
  
  return (
    <div className="section">
      <header>
          <span className='fs-4'>Copy Section</span>
          {expand ? <TiMinus onClick={()=>setExpand(false)}/> : <TiPlus onClick={()=>setExpand(true)}/>}
      </header>
      {expand && <div className="section__body">
        <Row>
          {/* COPY */}
          <Col sm={12} md={isCustomCopyActive ? 4 : !isNoCopyActive ? 8 : 12} 
          className={`mb-md-0 mb-3 ${isCustomCopyActive ? 'd-flex flex-column justify-content-lg-between' : ''}`}>
            <Form.Label className='fs-5'><strong>COPY</strong></Form.Label>
            <Form.Select aria-label="Default select example" size="lg" name="copy"
            ref={copyRef}
            onChange={(e)=>setInputs(pre => ({...pre, copy: e.target.value}))}
            >
              <optgroup label="Select Copy">
                {COPYTEXT.map(copy => {
                 return <option value={copy} key={copy}>{copy}</option>
                })}
              </optgroup>
            </Form.Select>


            {/* COPY Position */}
            {isCustomCopyActive && <><Form.Label className='fs-5 mt-1'><strong>Copy Position</strong></Form.Label>
            <Form.Select aria-label="Default select example" size="lg" name="copy position" ref={customCopyPositionRef}
            onChange={(e)=>setInputs(pre => ({...pre, customCopyPOS: e.target.value}))}
            >
              <optgroup label="Select Copy Position">
                 {DefaultCopyPosition.map(pos => <option value={pos} key={pos}>{pos}</option>)}
                 
                
              </optgroup>
            </Form.Select></>}


          
          </Col>




          {/* Custom COPY */} 
          {isCustomCopyActive && <Col sm={12} md={4} className="mb-md-0 mb-3 d-flex flex-column justify-content-between">
            <Form.Label className='fs-5'><strong>Custom Text</strong></Form.Label>
            <Form.Control size="lg" type="text" placeholder="Text Here..." />

            {/* Custom Copy Position */} 
            <Row className={`mt-1 g-2 ${isCustomCopyPostionActive ? "text-dark" : "text-muted"}`} >
              
              <Col md={6} lg={4} xs={4}>
              <Form.Label className='fs-6'><strong>X-Axis</strong></Form.Label>
                <Form.Control type="number" size="sm" className='p-1 text-center fs-6' disabled={!isCustomCopyPostionActive}/>
              </Col>
              <Col md={6} lg={4} xs={4}>
              <Form.Label className='fs-6'><strong>Y-Axis</strong></Form.Label>
                <Form.Control type="number" size="sm"className='p-1 text-center fs-6'  disabled={!isCustomCopyPostionActive}/>
              </Col>
             <Col md={12} lg={4} xs={4}>
              <Form.Label className='fs-6'><strong>Font Size</strong></Form.Label>
                <Form.Control type="number" size="sm" className='p-1 text-center fs-6' disabled={!isCustomCopyPostionActive}/>
              </Col>
              
            </Row>
          </Col>
          }

          {/* Gradient */} 
          {!isNoCopyActive && <Col sm={12} md={4}>
          
              <ApplyGradient tip="Apply Gradient to behind the Copy Text" type="copy"/>
            
          </Col>}
        </Row>
      </div>}
    </div>
  )
}

export default CopyText