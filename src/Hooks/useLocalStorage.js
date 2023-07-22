import {useState} from 'react'

function getSavedValue(key, initialValue){
  
    const savedValue = JSON.parse(localStorage.getItem(key))
    if(savedValue) return savedValue
    

    if(initialValue instanceof Function) return initialValue()
    return initialValue;
}

const useLocalStorage = (key, initialValue) => {

  const [value, setValue] = useState(() => getSavedValue(key, initialValue))

  
  
  
  return [value, setValue]
}

export default useLocalStorage