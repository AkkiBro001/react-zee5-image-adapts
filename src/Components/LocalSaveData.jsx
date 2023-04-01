import { useRef } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import { TitleCase } from './CONSTANT';

const LoacalSaveData = ({type, subType, data}) => {
    const selectRef = useRef(null)
    

    return (
      <Row className='align-items-end mb-3'>
          <Col xs={6} sm={8}>
            <Form.Label className='fs-6'>
              <strong>Saved {TitleCase(subType)}</strong>
            </Form.Label>
            <Form.Select aria-label="Default select example" className='w-100' 
            ref={selectRef}
           
            >
             <option value="">{"1024x810"}</option>
            </Form.Select>
          </Col>
  
          <Col xs={3} sm={2}>
            <Button variant="primary" className='w-100 fs-5' size="sm"
            
            >
              <AiFillEdit/>
            </Button>
          </Col>
  
          <Col xs={3} sm={2}>
            <Button variant="danger" className='w-100 fs-5' size="sm"
            
            >
              <AiFillDelete/>
            </Button>
          </Col>
        </Row>
    )
  }

  export default LoacalSaveData;