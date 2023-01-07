import React, {useContext, createContext, useReducer, useEffect} from 'react'

import { NOTIFICATION } from '../Components'

export const ACTION_TYPE = {
    INITIAL_LOAD: "initial load",
    UPDATE_STORAGE: "update storage"
}



const NotiWrapper = createContext()
const NotificationContext = ({children}) => {
  const localGenralSetting = JSON.parse(localStorage.getItem("GenralSetting"))
  
  const init = (NOTIFICATION) => localGenralSetting ?  {...JSON.parse(JSON.stringify(NOTIFICATION)), Preview:localGenralSetting}
: JSON.parse(JSON.stringify(NOTIFICATION));
  
  function reducer(state, action){
    
    switch(action.type){
      case ACTION_TYPE.UPDATE_STORAGE: return {...state, Preview: localGenralSetting}
    }
  }
  
  const [NotiData, dispatchNoti] = useReducer(reducer, NOTIFICATION, init)
    
  return (
    <NotiWrapper.Provider value={{NotiData, dispatchNoti}}>
        {children}
    </NotiWrapper.Provider>
  )
}

export function useGlobalNotiContext () {
    return useContext(NotiWrapper)
}

export default NotificationContext