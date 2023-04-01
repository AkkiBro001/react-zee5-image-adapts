import { useState } from 'react';
import { Alert } from 'react-bootstrap'

const AlertBox = ({alertDisplay, alertType, alertTitle, alerMsg, handleClose}) => {
  
if(alertDisplay){

  return (
    <Alert variant={alertType} onClick={()=>handleClose(pre=> ({...pre, status: false}))} dismissible>
        <Alert.Heading>{alertTitle}</Alert.Heading>
        {typeof alerMsg === 'object' ? 
        <p>
          {alerMsg.msgObj.map((msg, index) => <span key={index}>{msg} <br/></span>)}
        </p>
        :<p>{alerMsg}</p>}
    </Alert>
  )
}else{
  return null;
}
}

export default AlertBox