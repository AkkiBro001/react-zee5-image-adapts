import { Alert } from 'react-bootstrap'

const AlertBox = ({showAlert, alertType, alertTitle, alertMsg, setAlert}) => {
    
if(showAlert){
  
  return (
    <Alert variant={alertType} onClose={() => setAlert((pre)=>({...pre, showAlert: false}))} dismissible>
        <Alert.Heading>{alertTitle}</Alert.Heading>
          <p>{alertMsg}</p>
    </Alert>
  )
}else{
  return null;
}
}

export default AlertBox