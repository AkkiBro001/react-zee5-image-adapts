import { useState } from 'react'
import {TiPlus, TiMinus} from 'react-icons/ti'
const TransformSection = () => {
  const [expand, setExpand] = useState(true)
  return (
    <div className="section">
      <header>
          <span className='fs-4'>Transform Section</span>
          {expand ? <TiMinus onClick={()=>setExpand(false)}/> : <TiPlus onClick={()=>setExpand(true)}/>}
      </header>
      {expand && <div className="section__body">
      Transform
      </div>}
    </div>
  )
}

export default TransformSection