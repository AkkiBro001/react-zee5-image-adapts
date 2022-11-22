import React, { useState, useRef } from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import { TiPlus, TiMinus } from 'react-icons/ti'
import { CTAs, Channels } from './CONSTANT'
import ApplyGradient from './ApplyGradient'
import { useHandleInput } from '../Hooks'
import {FaLink} from 'react-icons/fa';

const CTASection = () => {

  const [expand, setExpand] = useState(true)
  const [input, setInput] = useHandleInput({ name: '', value: '' })
  const channelRef = useRef(null) //!ChannelList
  const ctaRef = useRef(null) //!CTAList
  const customChannelRef = useRef(null) //!Custom Channel Position and Size
  const isChannelRequired = !channelRef.current ? false : channelRef.current?.value === "No Channel" ? false : true;
  const isWatchLiveNewActive = !ctaRef.current ? false : (ctaRef.current?.value === "WatchLiveStripWithShadow" || ctaRef.current?.value === "WatchLiveStrip") ? true : false;
  const isCustomChannelActive = !customChannelRef.current ? false : customChannelRef.current?.value === "custom" ? true : false;
  
  return (
    <div className="section">
      <header>
        <span className='fs-4'>CTA / Channel Section</span>
        {expand ? <TiMinus onClick={() => setExpand(false)} /> : <TiPlus onClick={() => setExpand(true)} />}
      </header>
      {expand && <div className="section__body">
        <Row>
          {/* CTA List Option  */}
          <Col sm={12} md={isChannelRequired ? 4 : 6} className="mb-md-0 mb-3 d-flex flex-column justify-content-lg-between">
            <Form.Label className='fs-5'><strong>CTA</strong></Form.Label>
            <Form.Select aria-label="Default select example" size="lg" onChange={(e) => { setInput(e) }} name="cta" ref={ctaRef}>
              <optgroup label="Select CTA Button">
                {CTAs.map(button => {
                  const noSpace = button.replace(/\s/g, "");
                  return <option value={noSpace} key={noSpace}>{button}</option>
                })}
              </optgroup>
            </Form.Select>


            {/* Channel Postion  */}

            {
              isChannelRequired && <><Form.Label className='fs-5 mt-1'><strong>Channel Position</strong></Form.Label>
                <Form.Select aria-label="Default select example" size="lg" name="channelPOS" ref={customChannelRef}  onChange={(e) => { setInput(e) }}>
                  <optgroup label="Select Channel Position">

                    <option value="top right">Top Right</option>
                    <option value="top left">Top Left</option>
                    {
                      isWatchLiveNewActive && <option value="on watch live strip">On Watch Live Strip</option>}
                    <option value="custom">Custom</option>

                  </optgroup>
                </Form.Select></>
            }

          </Col>




          <Col sm={12} md={isChannelRequired ? 4 : 6} className="mb-md-0 mb-3 d-flex flex-column justify-content-between">
            {/* Channel List Option  */}
            <Form.Label className='fs-5'><strong>Channels</strong></Form.Label>
            <Form.Select aria-label="Default select example" size="lg" onChange={(e) => { setInput(e) }} name="channel" ref={channelRef}>
              <optgroup label="Select Channel Logo">
                {Channels.map(channel => {
                  const noSpace = channel.replace(/-/g, "");
                  return <option value={noSpace} key={noSpace}>{channel.replace(/-/g, " ")}</option>
                })}
              </optgroup>
            </Form.Select>

            {/* Channel List Position and Size  */}
            {isChannelRequired && <Row className={`mt-1 g-2 ${isCustomChannelActive ? "text-dark" : "text-muted"}`} >
              
              <Col md={6} lg={3} xs={3}>
              <Form.Label className='fs-6'><strong>X-Axis</strong></Form.Label>
                <Form.Control type="number" size="sm" className='p-1 text-center fs-6' disabled={!isCustomChannelActive}/>
              </Col>
              <Col md={6} lg={3} xs={3}>
              <Form.Label className='fs-6'><strong>Y-Axis</strong></Form.Label>
                <Form.Control type="number" size="sm"className='p-1 text-center fs-6'  disabled={!isCustomChannelActive}/>
              </Col>
              <Col md={6} lg={3} xs={3} className="position-relative">
              <FaLink className="position-absolute fs-6 widthLinkCTA text-muted"/>
              <Form.Label className='fs-6'><strong>Width</strong></Form.Label>
                <Form.Control type="number"size="sm" className='p-1 text-center fs-6'  disabled={!isCustomChannelActive}/>
              </Col>
              <Col md={6} lg={3} xs={3}>
              <Form.Label className='fs-6'><strong>Height</strong></Form.Label>
                <Form.Control type="number" size="sm" className='p-1 text-center fs-6'  disabled={!isCustomChannelActive}/>
              </Col>
              
            </Row>}
          </Col>




          {isChannelRequired && <Col sm={12} md={4}>
            {/* Gradient Option  */}
            <ApplyGradient tip="Apply Gradient to behind the Channel Logo" type="channel" />

          </Col>}
        </Row>

        
      </div>}
    </div>
  )
}


export default CTASection