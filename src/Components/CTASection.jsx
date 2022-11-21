import { useState } from 'react'
import { Col, Row, Form, Fieldset } from 'react-bootstrap'
import { TiPlus, TiMinus } from 'react-icons/ti'
import { CTAs, Channels } from './CONSTANT'
const CTASection = () => {
  const [expand, setExpand] = useState(true)
  return (
    <div className="section">
      <header>
        <span className='fs-4'>CTA / Channel Section</span>
        {expand ? <TiMinus onClick={() => setExpand(false)} /> : <TiPlus onClick={() => setExpand(true)} />}
      </header>
      {expand && <div className="section__body">
        <Row>
          <Col sm={12} md={4}>
            <Form.Label className='fs-5'><strong>CTA</strong></Form.Label>
            <Form.Select aria-label="Default select example" size="lg">
              <optgroup label="Select CTA Button">
                {CTAs.map(button => {
                  const noSpace = button.replace(/\s/g, "");
                  return <option value={noSpace} key={noSpace}>{button}</option>
                })}
              </optgroup>
            </Form.Select>
          </Col>

          <Col sm={12} md={4}>
            <Form.Label className='fs-5'><strong>Channels</strong></Form.Label>
            <Form.Select aria-label="Default select example" size="lg">
              <optgroup label="Select Channel Logo">
                {Channels.map(channel => {
                  const noSpace = channel.replace(/-/g, "");
                  return <option value={noSpace} key={noSpace}>{channel.replace(/-/g, " ")}</option>
                })}
              </optgroup>
            </Form.Select>
          </Col>

          <Col sm={12} md={4}>
          <fieldset disabled>
              <Row>
                <Col xs={12}><Form.Label className='fs-5'><strong>Apply Gradient</strong></Form.Label></Col>
                <Col md={12} lg={6}>
                <Form.Check
                  type="switch"
                  id="custom-switch-1"
                  label="Dark Gradient"
                />
                </Col>
                <Col md={12} lg={6}>
                <Form.Check
                  type="switch"
                  id="custom-switch-2"
                  label="Light Gradient"
                />
                </Col>
              </Row>
            </fieldset>
          </Col>
        </Row>
      </div>}
    </div>
  )
}


export default CTASection