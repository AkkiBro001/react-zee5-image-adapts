import {useEffect, useState} from 'react'
import { Alert } from 'react-bootstrap'

const AlertBox = ({name, value, type}) => {

 
  
  const [display, setDisplay] = useState({
    name,
    value,
    type,
    show: true,
    title: '',
    errorType: 'danger',
    msg: ''

  })

  useEffect(()=>{
  }, [name, value, type])
  
  if(display.show)
  return (
    <Alert variant={display.errorType} onClose={()=>setDisplay(preVal => ({...preVal, show: false}))} dismissible>
        <Alert.Heading>{display.title}</Alert.Heading>
        <p>
          {display.msg}
        </p>
    </Alert>
  )
}

export default AlertBox