import React from 'react'
import './toaster.css'

const Toaster = ({closeToaster,type,text}) => {
  return (
    <div className={`w-80 h-12 rounded-xl p-3  my-2 flex justify-between  ${type}`}>
        <p>{text}</p>
       <i  className="cursor-pointer" onClick={()=>closeToaster(type)}>❌</i>
    </div>
  )
}

export default Toaster
