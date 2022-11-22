import React from 'react'
import ToolTip from './ToolTip'
import {AiFillInfoCircle} from 'react-icons/ai'
import { Col, Row, Form, Button } from 'react-bootstrap'

const ApplyGradient = ({tip, type}) => {
  return (
    <Row>
                <Col xs={12}>
                <Form.Label className='fs-5'>
                <strong>Apply Gradient</strong>
                <ToolTip tip={tip}>
                <Form.Label className='toolTip'>
                  <AiFillInfoCircle/>
                </Form.Label>
                </ToolTip>
               </Form.Label>
                </Col>
                <Col md={12} lg={12} xl={6}>
                <Form.Check
                  type="switch"
                  id={`${type}-dark`}
                  label="Dark Gradient"
                />
                </Col>
                <Col md={12} lg={12} xl={6}>
                <Form.Check
                  type="switch"
                  id={`${type}-light`}
                  label="Light Gradient"
                />
                </Col>
                <Col md={12} lg={12} xl={12} className="mt-3">
                <Form.Label>Opacity</Form.Label>
                <Form.Range />
                <div className='d-flex justify-content-between text-muted'>
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
                </Col>
              </Row>
  )
}

export default ApplyGradient