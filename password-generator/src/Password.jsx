import React, { useEffect, useState,useRef } from 'react'

const Password = () => {
    const passwordLength = 8
    const [password, setPassword] = useState("password")
    const [length, setLength] = useState(passwordLength)
    const [Numbers, setNumbers] = useState(false)
    const [specialCharacters, setSpecialCharacters] = useState(false)
    
const passInput=useRef(null)

    const generatePassword = () => {

        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (Numbers) str += "0123456789"
        if (specialCharacters) str += "!@#$%^&*()_+"
        let password = ""
        for (let i = 0; i < length; i++) {
            let index = Math.floor(Math.random() * str.length)
            password += str[index]
        }
        setPassword(password)
    }


   



   const handleCopyClick = () => {
     navigator.clipboard.writeText(password)
   
    passInput.current.select()
    }


    useEffect(() => {
        generatePassword()
    }, [length, Numbers, specialCharacters])

    return (
        <div className="my-14 m-auto border-2 border-black w-[35rem] text-center">
            <h3 className="font-bold text-center m-2 mb-4 "> Password Generator</h3>
            <div >

                <input ref={passInput} type="text" value={password} readOnly className="w-72 border-2 border-gray-600 border-r-0 rounded-l-lg px-2" />
                <button className='border-2 border-gray-600 rounded-r-lg px-2 bg-blue-500 text-white' onClick={handleCopyClick}>Copy</button>
            </div>
            <div className='flex justify-between m-2 mx-8  text-sm' >
                <div className='flex align-middle'>
                    <input type="range" name="length" value={length} min={0} max={20} onChange={(e) =>

                        setLength(e.target.value)} />
                    <label for="length">{`Length: ${length}`}</label>

                </div>
                <div className="flex align-middle ">

                    <input type="checkbox" defaultChecked={Numbers} onChange={(e) => {
                        setNumbers(e.target.checked)
                    }} />
                    <label for="length">Numbers</label>
                </div>
                <div >

                    <input type="checkbox" defaultChecked={specialCharacters} onChange={(e) => { setSpecialCharacters(e.target.checked) }} />
                    <label for="length">Special characters </label>
                </div>
            </div>
        </div>
    )
}

export default Password