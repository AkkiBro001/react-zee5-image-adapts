import { Col, Row, Form, Button } from 'react-bootstrap';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import { TitleCase } from './CONSTANT';

const LoacalSaveData = ({type, subType, data}) => {
    return (
      <Row className='align-items-end mb-3'>
          <Col xs={6} sm={8}>
            <Form.Label className='fs-6'>
              <strong>Saved {TitleCase(subType)}</strong>
            </Form.Label>
            <Form.Select aria-label="Default select example" className='w-100'>
              {data.map((data, index) => {
                //!Notification ==================================================
                if(type === "notification"){
                  if(subType.includes('size')){
                    const {w, h} = data
                    const text = `${w}x${h}`
                    return <option value={text} key={index}>{text}</option>
                  }else{
                    const {name} = data
                    const text = TitleCase(name)
                    return <option value={text} key={index}>{text}</option>
                  }
                }
                //!Banners ==================================================
                else{
                   
                }

                })}
            </Form.Select>
          </Col>
  
          <Col xs={3} sm={2}>
            <Button variant="primary" className='w-100 fs-5' size="sm">
              <AiFillEdit/>
            </Button>
          </Col>
  
          <Col xs={3} sm={2}>
            <Button variant="danger" className='w-100 fs-5' size="sm">
              <AiFillDelete/>
            </Button>
          </Col>
        </Row>
    )
  }

  export default LoacalSaveData;