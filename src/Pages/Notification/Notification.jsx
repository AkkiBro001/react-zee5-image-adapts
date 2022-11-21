import { ActualImage, CopyText, CTASection, ExportSetion, ImportSection, PreviewImage, TransformSection, useNotification} from '../../Components';




const Notification = () => {
  //!Show Actual Image at bottom (For Production it must be false)
  const ShowActualImage = true;
  
  return (
    <>
    <PreviewImage/>
    <ImportSection/>
    <TransformSection/>
    <CTASection/>
    <CopyText/>
    <ExportSetion/>
    {ShowActualImage && <ActualImage/>}
    </>
  )
}

export default Notification