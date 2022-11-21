import { useState } from 'react'
import {TiPlus, TiMinus} from 'react-icons/ti'
const CopyText = () => {
  const [expand, setExpand] = useState(true)
  return (
    <div className="section">
      <header>
          <span className='fs-4'>Copy Section</span>
          {expand ? <TiMinus onClick={()=>setExpand(false)}/> : <TiPlus onClick={()=>setExpand(true)}/>}
      </header>
      {expand && <div className="section__body">
      CopyText
      </div>}
    </div>
  )
}

export default CopyText