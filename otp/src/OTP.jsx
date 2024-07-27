import React, { useState, useRef, useEffect } from 'react'

const OTP = ({length=6}) => {

  const [otp, setOtp] = useState(Array(length).fill(""))

const inputRef = useRef([])

  useEffect(() => {
    inputRef.current[0].focus();
  }, [])
  let handleInputChange = (e, index) => {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      e.target.value = e.key


      let copyOtp=[...otp]
      copyOtp[index]=e.key
      setOtp(copyOtp)
      

      if(index!=0 && inputRef.current[index-1].value=="") inputRef.current[index-1].focus(); 
    else if(index < length-1 && inputRef.current[index + 1].value=="") inputRef.current[index + 1].focus();
    else if(index<length-2 && inputRef.current[index + 2].value=="") inputRef.current[index + 2].focus();
    
    } 
    else if (e.key == "Backspace") {
      e.target.value = ""
      let copyOtp=[...otp]
      copyOtp[index]=""
      setOtp(copyOtp)
     if(index > 0) inputRef.current[index - 1].focus();
    }
    else if(e.key=="ArrowLeft"){
      if(index > 0) inputRef.current[index - 1].focus(); 
    }
    else if(e.key=="ArrowRight"){
      
      if(index < length-1) inputRef.current[index + 1].focus();
    }
    e.preventDefault();
  }



  return (

    
    <div>


      {Array(length).fill(0).map((_, index) => (
        <input ref={(element) => inputRef.current[index] = element}  key={index} type="text" placeholder='0' className='h-9 w-9 outline-blue-600 border-2 border-gray-400 m-3 text-center rounded-lg' 
        onKeyDown={(e) => { handleInputChange(e, index) }}/>
      ))}
      {/* <input ref={(element) => inputRef.current[0] = element} type="text" placeholder='0' className='h-9 w-9 outline-blue-600 border-2 border-gray-400 m-3 text-center rounded-lg'
        onKeyDown={(e) => { handleInputChange(e, 0) }}
      />
      <input ref={(element) => inputRef.current[1] = element} type="text" placeholder='0' className='h-9 w-9 outline-blue-600 border-2 border-gray-400 m-3 text-center rounded-lg'
        onKeyDown={(e) => { handleInputChange(e, 1) }} />
      <input ref={(element) => inputRef.current[2] = element} type="text" placeholder='0' className='h-9 w-9 outline-blue-600 border-2 border-gray-400 m-3 text-center rounded-lg'
        onKeyDown={(e) => { handleInputChange(e, 2) }} />
      <input ref={(element) => inputRef.current[3] = element} type="text" placeholder='0' className='h-9 w-9 outline-blue-600 border-2 border-gray-400 m-3 text-center rounded-lg'
        onKeyDown={(e) => { handleInputChange(e, 3) }} /> */}
    </div>
  )
}

export default OTP