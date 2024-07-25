import React, { useRef } from 'react'
import Toaster from './Toaster'
import { useState } from 'react'

const Toast = () => {

  const [showToaster, setShowToaster] = useState([])

  // const [type, setType] = useState("")
  // const [text, setText] = useState("")
  const timerRef = useRef({})
  const handleClick = (e, type, text) => {
    // setShowToaster(true)
  
    // setType(type)
    // setText(text)
    

setShowToaster([...showToaster, {id:type,text,type}])

    timerRef.current[type] = setTimeout(() => {
      console.log(`closing ${type} from timeout`)
      closeToaster(type)
    }, 4000);
  }

  const closeToaster = (type) => {

    setShowToaster((showToaster)=> showToaster.filter((item) => item.id !== type))


    clearTimeout(timerRef.current[type])
    console.log(`closing ${type}`)
    delete timerRef.current[type];
    // setShowToaster(false)
  }


  return (
    <div>
      <button className="border-2 border-gray-800 p-1 m-2 rounded-lg" onClick={(e) => { handleClick(e, "warning", "Warning toast") }}>Warning</button>
      <button className="border-2 border-gray-800 p-1 m-2 rounded-lg" onClick={(e) => { handleClick(e, "success", "Success toast") }}>Success</button>
      <button className="border-2 border-gray-800 p-1 m-2 rounded-lg" onClick={(e) => { handleClick(e, "error", "Error toast") }}>Error</button>
      <button className="border-2 border-gray-800 p-1 m-2 rounded-lg" onClick={(e) => { handleClick(e, "info", "Info toast") }}>info</button>
     
     
      {/* {showToaster && <Toaster closeToaster={closeToaster} type={type} text={text} />} */}
      <div className=" fixed top-2 right-0 border-2">
       { showToaster.map((item)=> <Toaster  key={item.id} closeToaster={closeToaster} type={item.type} text={item.text} />)}
 
      </div>
    </div>
  )
}

export default Toast