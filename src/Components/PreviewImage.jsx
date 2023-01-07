import { useGlobalNotiContext } from "../Context/Notification_Context"

function getSize({width, height}) {
    switch (height / width) {
      case 1 : return '1 / 1';
      case 0.5: return '2 / 1';
      case 0.75: return '4 / 3';
      default: return '2 / 1'
    }

}
const PreviewImage = () => {
 

  const {NotiData} = useGlobalNotiContext()
  

  

  const CanvasSize = getSize(NotiData.Preview.size)
  const PreviewStyle = {
    width: '100%',
    aspectRatio: CanvasSize,
    backgroundColor: NotiData.Preview.bgColor,
    position: `${NotiData.Preview.isFloating ? 'sticky' :  'static'}`,
    top:0,
    zIndex: 100, 
  } 
  return (
    <div style={PreviewStyle}>
        
    </div>
  )
}

export default PreviewImage