import { useState } from 'react'
import {TiPlus, TiMinus} from 'react-icons/ti'
const ImportSection = () => {
  const [expand, setExpand] = useState(true)
  return (
    <div className="section">
      <header>
          <span className='fs-4'>Image Import Section</span>
          {expand ? <TiMinus onClick={()=>setExpand(false)}/> : <TiPlus onClick={()=>setExpand(true)}/>}
      </header>
      {expand && <div className="section__body">
      ImportSection
      </div>}
    </div>
  )
}

export default ImportSection