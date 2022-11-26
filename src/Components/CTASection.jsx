import React, { useState, useRef } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { TiPlus, TiMinus } from 'react-icons/ti'
import { CTAs, Channels, ChannelPosition, CTAPosition } from './CONSTANT'
import ApplyGradient from './ApplyGradient'
import { useHandleInput } from '../Hooks'
import { FaLink } from 'react-icons/fa';
import { AiFillInfoCircle } from 'react-icons/ai'
import ToolTip from './ToolTip'

const CTASection = () => {
  /*REFs*/
  const channelRef = useRef(null) //!Channel List
  const ctaRef = useRef(null) //!CTA List
  const ctaPosRef = useRef(null) //!CTA Postion List
  const customChannelRef = useRef(null) //!Custom Channel Position and Size
  const isNewCtaRef = useRef(null) //!Create New CTA

  /*VARIABLE*/
  const DEFAULT_CHANNEL_POSITION = ChannelPosition[0].toLowerCase(); //Top Right
  const DEFAULT_CTA_POSITION = CTAPosition[0].toLowerCase(); //Bottom Center
  const CREAT_NEW_CTA = isNewCtaRef.current?.value === "yes"; //Bottom Center
  const NoChannel = Channels[0];
  const WatchLiveStrip = CTAs.filter(val => val.toLowerCase().includes("strip"))
    .map(val => val.replace(/\s/g, ""));

  const [expand, setExpand] = useState(true)
  const [isCustomizeCtaActive, setIsCustomizeCtaActive] = useState(false)
  const [input, setInput] = useHandleInput({ name: '', value: '' })
   
  const isChannelRequired = !channelRef.current ? false : channelRef.current?.value === NoChannel ? false : true;
  const isWatchLiveNewActive = !ctaRef.current ? false : WatchLiveStrip.includes(ctaRef.current?.value) ? true : false;
  const isCustomChannelActive = !customChannelRef.current ? false : customChannelRef.current?.value === "custom" ? true : false;
  const isCustomCtaActive = !ctaPosRef.current ? false : ctaPosRef.current?.value === "custom" ? true : false;
  

  return (
    <div className="section">
      <header>
        <span className='fs-4'>CTA / Channel Section</span>
        {expand ? <TiMinus onClick={() => setExpand(false)} /> : <TiPlus onClick={() => setExpand(true)} />}
      </header>
      {expand && <div className="section__body">
        {/* Main CTA Section */}
        <Row>
          {/* CTA List Option  */}
          <Col sm={12} md={isChannelRequired ? 4 : 6} className="mb-md-0 mb-3 d-flex flex-column justify-content-lg-between">
            <Form.Label className='fs-5 d-flex justify-content-between align-items-center'>
              <strong>CTA</strong>
              {(ctaRef.current?.value === undefined || ctaRef.current?.value !== "NoCTA") && 
              <><Form.Check
                type="switch"
                id="Custom-CTA"
                label="Customize CTA"
                className='fs-6 ms-auto'
                onChange={() => setIsCustomizeCtaActive(pre => !pre)}
                checked={isCustomizeCtaActive}
              />
              <ToolTip tip="Customize CTA button like Resize, Repostion and Create new CTA">
              <Form.Label className='toolTip'>
                  <AiFillInfoCircle/>
                </Form.Label>
              </ToolTip>
            </>
            }
            </Form.Label>
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
              isChannelRequired && <><Form.Label className='fs-5 mt-1 d-flex justify-content-between align-items-xl-center flex-xl-row flex-sm-column'>
                <strong>Channel Position</strong>
                
                {(customChannelRef.current?.value !== undefined  && customChannelRef.current?.value !== DEFAULT_CHANNEL_POSITION) && <Form.Check
                  type="switch"
                  id="default-channel-pos"
                  label="Set as default"
                  className='fs-6'
                />}
              </Form.Label>
                <Form.Select aria-label="Default select example" size="lg" name="channelPOS" ref={customChannelRef} onChange={(e) => { setInput(e) }}>
                  <optgroup label="Select Channel Position">
                    {ChannelPosition.map(ele => {

                      if (ele === "On Watch Live Strip") {
                        return isWatchLiveNewActive && <option value={ele.toLowerCase()} key={ele}>{ele}</option>
                      } else {
                        return <option value={ele.toLowerCase()} key={ele}>{ele}</option>
                      }
                    })}


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
                <Form.Control type="number" size="sm" className='p-1 text-center fs-6' disabled={!isCustomChannelActive} />
              </Col>
              <Col md={6} lg={3} xs={3}>
                <Form.Label className='fs-6'><strong>Y-Axis</strong></Form.Label>
                <Form.Control type="number" size="sm" className='p-1 text-center fs-6' disabled={!isCustomChannelActive} />
              </Col>
              <Col md={6} lg={3} xs={3} className="position-relative">
                <FaLink className="position-absolute fs-6 widthLinkCTA text-muted" />
                <Form.Label className='fs-6'><strong>Width</strong></Form.Label>
                <Form.Control type="number" size="sm" className='p-1 text-center fs-6' disabled={!isCustomChannelActive} />
              </Col>
              <Col md={6} lg={3} xs={3}>
                <Form.Label className='fs-6'><strong>Height</strong></Form.Label>
                <Form.Control type="number" size="sm" className='p-1 text-center fs-6' disabled={!isCustomChannelActive} />
              </Col>

            </Row>}
          </Col>




          {/* Gradient Option  */}
          {isChannelRequired && <Col sm={12} md={4}>
            <ApplyGradient tip="Apply Gradient to behind the Channel Logo" type="channel" />

          </Col>}
        </Row>

        {/*===== CTA Customize ============================================================*/}

        {(isCustomizeCtaActive && ctaRef.current?.value !== "NoCTA") && <><Row className='mt-3 flex-md-row flex-column'>
          <hr />

          {/*CTA Position*/}
          <Col>
            <Form.Label className='fs-5 mt-0 d-flex justify-content-between align-items-xl-center flex-xl-row'>
              <strong>CTA Position</strong>
              
                
              {ctaPosRef.current?.value === DEFAULT_CTA_POSITION  ? null : !ctaPosRef.current?.value ? null : <Form.Check
                type="switch"
                id="default-CTA-pos"
                label="Set as default"
                className='fs-6'
              />}
            </Form.Label>
            <Form.Select aria-label="Default select example" size="lg" name="ctaPOS" ref={ctaPosRef} onChange={(e)=>setInput(e)}>
              <optgroup label="Select CTA Postion">
                {CTAPosition.map(pos => <option value={pos.toLowerCase()} key={pos}>{pos}</option>)}


              </optgroup>
            </Form.Select>
          </Col>

          {/* Create New CTA ? */}
          {isCustomCtaActive && <Col>
            <Form.Label className='fs-5 mt-0'><strong>Create New CTA ?</strong></Form.Label>
            <Form.Select aria-label="Default select example" size="lg" name="isNewCta" onChange={(e)=>setInput(e)} ref={isNewCtaRef}>

              <option value="no">No</option>
              <option value="yes">Yes</option>

            </Form.Select>
          </Col>}




        </Row>

        {/*===== CTA Postion Custom Option =========================================================*/}

          {isCustomCtaActive && <Row className='mt-2 align-items-xl-start'>
              {/* CTA Name */}
              
            {CREAT_NEW_CTA && <Col xs={12} lg={4}>
              <Form.Label className='fs-5 mt-0'><strong>CTA Name</strong></Form.Label>
              <Form.Control size="md" type="text" placeholder="Text Here..." />
            </Col>}

            {/* x, y, Width, Height of CTA */}
            <Col xs={CREAT_NEW_CTA ? 7 : 12} lg={CREAT_NEW_CTA ? 4 : 12} className="mt-lg-2">
              <Row className={`mt-lg-0 mt-1 g-2 text-dark ${!CREAT_NEW_CTA ? 'justify-content-center' : ''}`}>

                <Col md={CREAT_NEW_CTA ? 6 : 5} lg={CREAT_NEW_CTA ? 3 : 2} xs={CREAT_NEW_CTA ? 6 : 3} className="mt-0">
                  <Form.Label className='fs-6'><strong>X-Axis</strong></Form.Label>
                  <Form.Control type="number" size="sm" className='p-1 text-center fs-6' />
                </Col>
                <Col md={CREAT_NEW_CTA ? 6 : 5} lg={CREAT_NEW_CTA ? 3 : 2} xs={CREAT_NEW_CTA ? 6 : 3} className="mt-0">
                  <Form.Label className='fs-6'><strong>Y-Axis</strong></Form.Label>
                  <Form.Control type="number" size="sm" className='p-1 text-center fs-6' />
                </Col>
                <Col md={CREAT_NEW_CTA ? 6 : 5} lg={CREAT_NEW_CTA ? 3 : 2} xs={CREAT_NEW_CTA ? 6 : 3} className="position-relative mt-0">
                  <FaLink className="position-absolute fs-6 widthLinkCTA text-muted" />
                  <Form.Label className='fs-6'><strong>Width</strong></Form.Label>
                  <Form.Control type="number" size="sm" className='p-1 text-center fs-6' />
                </Col>
                <Col md={CREAT_NEW_CTA ? 6 : 5} lg={CREAT_NEW_CTA ? 3 : 2} xs={CREAT_NEW_CTA ? 6 : 3} className="mt-0">
                  <Form.Label className='fs-6'><strong>Height</strong></Form.Label>
                  <Form.Control type="number" size="sm" className='p-1 text-center fs-6' />
                </Col>
                <Col md={CREAT_NEW_CTA ? 12 : 5} lg={CREAT_NEW_CTA ? 12 : 2} xs={CREAT_NEW_CTA ? 12 : 3} className="mt-1">
                  <Form.Label className='fs-6'><strong><span>Border</span> Radius</strong></Form.Label>
                  <Form.Control type="number" size="sm" className='p-1 text-center fs-6' />
                </Col>

              </Row>
            </Col>

            {/* BG Color, Play Button, Save Button */}
            {CREAT_NEW_CTA && <Col className='d-flex mt-lg-2 mt-1' xs={5} lg={4}>
              <Row className='g-2 w-100'>
                <Col sm={12} lg={3} className="d-flex justify-content-end flex-column">
                  <Form.Label htmlFor="exampleColorInput" className='fs-6 mt-0'><strong>BG Color</strong></Form.Label>
                  <Form.Control
                    type="color"
                    id="exampleColorInput"
                    defaultValue="#563d7c"
                    title="Choose your color"
                    size="md"
                  />
                </Col>

                <Col sm={12} lg={5} className="d-flex justify-content-end flex-column">
                  <Form.Label className='fs-6 mt-0'><strong>Play Button</strong></Form.Label>
                  <Form.Select aria-label="Default select example" size="md">

                    <option value="no">No</option>
                    <option value="yes">Yes</option>

                  </Form.Select>
                </Col>

                <Col sm={12} lg={4} className="d-flex align-items-end">
                  <Button variant="primary" size="md">Save CTA</Button>
                </Col>
              </Row>
            </Col>}

          </Row>}
        </>
        }
      </div>}
    </div>
  )
}


export default CTASection