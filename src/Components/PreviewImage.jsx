


// eslint-disable-next-line no-unused-vars
function getSize({width, height}) {
    switch (height / width) {
      case 1 : return '1 / 1';
      case 0.5: return '2 / 1';
      case 0.75: return '4 / 3';
      default: return '2 / 1'
    }

}
const PreviewImage = () => {
 
 
  const PreviewStyle = {
    width: '100%',
    aspectRatio: '16/9',
    backgroundColor: '#000',
    position: 'static',
    top:0,
    zIndex: 100, 
  } 
  return (
    <div style={PreviewStyle}>
        
    </div>
  )
}

export default PreviewImage