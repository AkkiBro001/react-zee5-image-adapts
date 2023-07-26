import { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import {TiPlus, TiMinus} from 'react-icons/ti'
import { useSelector } from 'react-redux'

const Range = ({lable, limits}) => (
      <Col xs={12}>
          <Form.Label className='fs-5'><strong>{lable}</strong></Form.Label>
          <Form.Range/>
          <div className='d-flex justify-content-between text-secondary'>
            {limits.map((limit, index)=><strong key={index}>{limit}</strong>)}
          </div>
      </Col>
)

const TransformSection = () => {
  const [expand, setExpand] = useState(true)
  const {images} = useSelector(state => state.notiImage.data)
  return (
    <div className="section">
      <header>
          <span className='fs-4'>Transform Section</span>
          {expand ? <TiMinus onClick={()=>setExpand(false)}/> : <TiPlus onClick={()=>setExpand(true)}/>}
      </header>
      {expand && <div className="section__body">
      <Row className='g-2'>
        <Col xs={12}>
        <Form.Select aria-label="Default select example" size="lg">
        <optgroup label="Selete Image">
          {
            images.map((img, index) => <option value="img1" key={index}>Image {index+1} {img?.name && `(${img.name})`}</option>)
          }
  
              </optgroup>  
            
            </Form.Select>
        </Col>
        <Range lable="X Axis" limits={["-100%", "0%", "100%"]}/>
        <Range lable="Y Axis" limits={["-100%", "0%", "100%"]}/>
        <Range lable="Scale" limits={["0%", "50%", "100%"]}/>
        <Range lable="Quality" limits={["0", "50", "100"]}/>
      </Row>
      </div>}
    </div>
  )
}

export default TransformSection