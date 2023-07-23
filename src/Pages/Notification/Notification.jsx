import { ActualImage, CopyText, CTASection, ExportSection, ImportSection, PreviewImage, TransformSection} from '../../Components';




const Notification = () => {
  //!Show Actual Image at bottom (For Production it must be false)
  const ShowActualImage = false;
  

  return (
    <>
    <PreviewImage/>
    <ImportSection/>
    <TransformSection/>
    <CTASection/>
    <CopyText/>
    <ExportSection/>
    {ShowActualImage && <ActualImage/>}
    </>
  )
}

export default Notification