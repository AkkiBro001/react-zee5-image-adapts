import React, {useContext, createContext, useReducer} from 'react'
import { NOTIFICATION } from '../Components'

const NotiWrapper = createContext()
const NotificationContext = ({children}) => {
  function reducer(type, action){
  
  }
  const [NotiData, dispatchNoti] = useReducer(reducer, JSON.parse(JSON.stringify(NOTIFICATION)))
  return (
    <NotiWrapper.Provider value={{NotiData}}>
        {children}
    </NotiWrapper.Provider>
  )
}

export function useGlobalNotiContext () {
    return useContext(NotiWrapper)
}

export default NotificationContext