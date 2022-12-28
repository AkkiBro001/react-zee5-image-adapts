import { useState } from "react"

const useHandleInput = (defaultValue) => {
    const [value, setValue] = useState(defaultValue)

    function inputValue(event) {
        const {name, value, type} = event.target;
        
        setValue(() => ({name, value, type}))
      }
  
  return [value, inputValue]
}

export default useHandleInput