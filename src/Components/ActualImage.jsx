import { createRef, useEffect, useRef, useState, forwardRef } from "react";
import { useSelector } from "react-redux"
import { getImage } from "../Utils/Utils";





const ActualImage = forwardRef((_,previewRef) => {

  const NotiImage = useSelector(state => state.notiImage)
  const Setting = useSelector(state => state.setting)
  
  const [refList, setRefList] = useState([])
  const mainCanvasRef = useRef()

  const createRefList = (noOfImages) => {
   
    const ref = Array.from({length: noOfImages}).map(_ => createRef())
    setRefList(ref)
}

async function PreviewImage () {

  
      const loadImages = new Promise((resolve, reject) => {
        
        const urls = NotiImage.data.images.map(img => img.url)
        getImage(urls).then(images => {
            
            resolve(images)
        })
      })
      
     const images = await loadImages;
     
      
      const loadCanvas = new Promise((resolve, reject) => {
        const canvasArr = []

            refList.forEach((canvas, index) => {
              const {x, y, width, height, type} = NotiImage.data.images[index]
        
                const ctx = canvas.current.getContext("2d");
                const image = images[index]
                
                ctx.drawImage(image, x, y, width, height);
                canvasArr.push(canvas.current.toDataURL(type))
                
            })
            previewRef.current.src = "";
            resolve(canvasArr)
      })

      const canvas = await loadCanvas;

      getImage(canvas).then(res => {
        const ctx = mainCanvasRef.current?.getContext("2d");
            res.forEach((img, index) => {
      
                ctx.drawImage(img, (img.width * index), 0, img.width, img.height);
                
            })
            const imgURL = mainCanvasRef.current?.toDataURL('image/jpeg');
            
            previewRef.current.src = imgURL;
      })

  }
    
  
  


useEffect(()=>{

  if(!refList.length || !refList.every(ref => ref.current)){

    createRefList(NotiImage.data.noOfImage)
  }
  
  if(NotiImage.status === "ideal"){
      
      PreviewImage()
  } ;
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [NotiImage])

if(NotiImage.status === "loading" || NotiImage.status === "error") return null;


  return (
    <div className="mx-auto">
    {refList.map((list, index) => <canvas 
    key={index} 
    width={`${NotiImage.data.notiSize.w / NotiImage.data.noOfImage}px`} 
    height={NotiImage.data.notiSize.h} 
    style={{backgroundColor: Setting.generalSetting.bg, margin:'0 auto 1em', display: 'block'} }
    ref={list}
    id={`canvas-${index}`}
    >

    </canvas>
    
    )
    
    }

    <canvas className="mainCanvas" id="mainCanvas"
      width={`${NotiImage.data.notiSize.w}px`} 
      height={NotiImage.data.notiSize.h} 
      style={{backgroundColor: Setting.generalSetting.bg, margin:'0 auto 1em', display: 'block'} }
      ref={mainCanvasRef}
    >

    </canvas>
    </div>
  )
})

export default ActualImage