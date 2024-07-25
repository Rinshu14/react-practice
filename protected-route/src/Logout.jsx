import React from 'react'

const Logout = (setIsLogin) => {
  let setLogin=()=>{
    setIsLogin(false)
  }
  return (
    <div>Logout
        <button onClick={setLogin}>Logout</button>
    </div>
  )
}

export default Logout