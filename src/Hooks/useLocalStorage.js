import {useEffect, useState} from 'react';
import NOTIFICATION from '../Components/CONSTANT';

function getSavedData (key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key))
    if(savedValue) return savedValue;
    
    if(key && !initialValue){
        if(key === "GenralSetting"){
          return NOTIFICATION.Preview
        }else if(key === "NotificationSetting"){

        }else if(key === "BannersSetting"){

        }
    }

    if(initialValue instanceof Function) return initialValue()
    return initialValue

}

const useLocalStorage = (key, initialValue) => {
    console.log(key, "Key")
    console.log(initialValue, "initialValue")

    const [storage, setStorage] = useState(()=>{
        return getSavedData (key, initialValue)
      })

  useEffect(()=>{
    if(!storage) return 
    localStorage.setItem(key, JSON.stringify(storage))
  }, [storage])

  
  return [storage, setStorage]
}

export default useLocalStorage