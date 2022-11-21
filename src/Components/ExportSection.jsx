import { useState } from 'react'
import {TiPlus, TiMinus} from 'react-icons/ti'
const ExportSection = () => {
  const [expand, setExpand] = useState(true)
  return (
    <div className="section">
      <header>
          <span className='fs-4'>Export Section</span>
          {expand ? <TiMinus onClick={()=>setExpand(false)}/> : <TiPlus onClick={()=>setExpand(true)}/>}
      </header>
      {expand && <div className="section__body">
      Export Section
      </div>}
    </div>
  )
}

export default ExportSection