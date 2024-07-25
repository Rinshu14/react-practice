import React from 'react'

const Login = ({setIsLogin}) => {
  let setLogin=()=>{
    setIsLogin(true)
  }
  return (
    <div>Login
        <button onClick={setLogin}>login</button>
    </div>
  )
}

export default Login