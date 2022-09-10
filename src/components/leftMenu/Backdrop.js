import React from 'react';
import "./backdrop.css"

const Backdrop = ({setIsDrawerOpen}) => {
  return (
    <div className='clt-backdrop' onClick={()=>setIsDrawerOpen(false)}>

    </div>
  )
}

export default Backdrop