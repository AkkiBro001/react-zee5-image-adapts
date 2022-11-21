import { createContext, useContext} from "react"

export const NotificationContext = createContext("ss")
const NotificationProvider = ({children}) => {
    
  return (
    <NotificationContext.Provider value={"asdsad"}>
    {children}
    </NotificationContext.Provider>
  )
}
function useNotification () {return useContext(NotificationContext)}

export default NotificationProvider
export {useNotification};