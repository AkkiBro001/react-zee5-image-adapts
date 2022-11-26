import {useState} from 'react'
import { Alert } from 'react-bootstrap'

const AlertBox = ({stat, msg}) => {
  
  const [show, setShow] = useState(stat)
  
  if(show)
  return (
    <Alert variant="danger" onClose={()=>setShow(false)} dismissible>
        <Alert.Heading>{msg}</Alert.Heading>
        <p>
          {msg}
        </p>
    </Alert>
  )
}

export default AlertBox