import React from "react"
import { Tooltip, OverlayTrigger } from "react-bootstrap"


const ToolTip = (props) => {
  return (
    <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip id={`tooltip-top`}>
              {props.tip}
            </Tooltip>
          }
        >
          {props.children}
        </OverlayTrigger>
  )
}

export default ToolTip