import { useRef } from 'react';
import { ActualImage, CopyText, CTASection, ExportSection, ImportSection, PreviewImage, TransformSection} from '../../Components';




const Notification = () => {
  //!Show Actual Image at bottom (For Production it must be false)
  const ShowActualImage = true;
  const previewRef = useRef()

  return (
    <>
    <PreviewImage ref={previewRef}/>
    <ImportSection/>
    <TransformSection/>
    <CTASection/>
    <CopyText/>
    <ExportSection/>
    {ShowActualImage && <ActualImage ref={previewRef}/>}
    </>
  )
}

export default Notification