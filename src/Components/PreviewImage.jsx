import { useSelector } from "react-redux";
import {forwardRef } from 'react';


// eslint-disable-next-line no-unused-vars
function getSize(width, height) {
  
    switch (height / width) {
      case 1 : return '1 / 1';
      case 0.5: return '2 / 1';
      case 0.75: return '4 / 3';
      default: return `${width / height}`
    }

}
const PreviewImage = forwardRef((_,previewRef) => {
  
  const Setting = useSelector(state => state.setting);
  const Notification = useSelector(state => state.notification);
  const {w, h} = Notification.defaultNotiSize;

  
  const PreviewStyle = {
    width: '100%',
    aspectRatio: getSize(w, h), 
    backgroundColor: Setting.generalSetting.bg,
    position: Setting.generalSetting.isFloating ? 'sticky' : 'static',
    top:0,
    zIndex: 100, 
  } 
  return (
    <div style={PreviewStyle}>
        <img alt="" ref={previewRef} style={{width: '100%', height: '100%'}}/>
    </div>
  )
})

export default PreviewImage