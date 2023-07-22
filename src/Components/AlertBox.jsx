import { Alert } from 'react-bootstrap'

const AlertBox = ({alertDisplay, alertType, alertTitle, alertMsg, setAlert}) => {
    
if(alertDisplay){
  
  return (
    <Alert variant={alertType} onClose={() => setAlert((pre)=>({...pre, alertDisplay: false}))} dismissible>
        <Alert.Heading>{alertTitle}</Alert.Heading>
        {typeof alertMsg === 'object' ? 
        <p>
          {alertMsg.msgObj.map((msg, index) => <span key={index}>{msg} <br/></span>)}
        </p>
        :<p>{alertMsg}</p>}
    </Alert>
  )
}else{
  return null;
}
}

export default AlertBox